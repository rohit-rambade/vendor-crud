import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },
  uid: String,
});

const User = mongoose.model("User", userSchema);

export default User;
