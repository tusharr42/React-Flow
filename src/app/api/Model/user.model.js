const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
});

const FolderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  files: [FileSchema],
  subfolders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Folder' }],
});

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: [true, "Email already in use."],
    },
    companyName: { type: String, required: true },
    jobTitle: { type: String, required: false },
    phoneNumber: { type: String, required: false },
    country: { type: String, required: true },
    password: { type: String, required: true },
    otp: { type: String, required: false },
    otpTimestamp: { type: Date, required: false },
    resetToken: { type: String, required: false },
    resetTokenExpiration: { type: Date, required: false },
    folders: [FolderSchema],
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;