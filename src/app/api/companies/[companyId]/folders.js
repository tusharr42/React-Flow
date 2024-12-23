import { dbConnection } from '../../../../dbconnection';
import User from '../../../../models/user.model';

export default async function handler(req, res) {
  await dbConnection();

  if (req.method === 'POST') {
    const { companyId } = req.query;
    const { name } = req.body;

    try {
      const user = await User.findById(companyId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const newFolder = { name, files: [], subfolders: [] };
      user.folders.push(newFolder);
      await user.save();

      res.status(201).json(newFolder);
    } catch (error) {
      res.status(500).json({ message: 'Error creating folder', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}