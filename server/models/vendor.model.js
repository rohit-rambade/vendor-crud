import mongoose, { Schema } from "mongoose";

const vendorSchema = new Schema({
  vendorName: { type: String, required: true },
  bankAccountNo: { type: String, required: true },
  bankName: { type: String, required: true },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String, required: true },
  city: String,
  country: String,
  zipCode: String,
});

const Vendor = mongoose.model("Vendor", vendorSchema);
export default Vendor;
