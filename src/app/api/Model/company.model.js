import mongoose from 'mongoose';

const CompanySchema = new mongoose.Schema({
  companyName: { type: String, required: true, unique: true },
  folders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Folder' }],
});

export default mongoose.models.Company || mongoose.model('Company', CompanySchema);