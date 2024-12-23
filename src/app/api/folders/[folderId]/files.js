import { dbConnection } from '../../../../dbconnection';
import User from '../../../../models/user.model';

export default async function handler(req, res) {
  await dbConnection();

  if (req.method === 'POST') {
    const { folderId } = req.query;
    const { name, content } = req.body;

    try {
      const user = await User.findOne({ 'folders._id': folderId });
      if (!user) {
        return res.status(404).json({ message: 'Folder not found' });
      }

      const folder = user.folders.id(folderId);
      const newFile = { name, content };
      folder.files.push(newFile);
      await user.save();

      res.status(201).json(newFile);
    } catch (error) {
      res.status(500).json({ message: 'Error creating file', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}