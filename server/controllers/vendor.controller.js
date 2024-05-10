import { validationResult } from "express-validator";
import Vendor from "../models/vendor.model.js";

// Controller for creating a new vendor
const createVendor = async (req, res) => {
  const {
    vendorName,
    bankAccountNo,
    bankName,
    addressLine1,
    addressLine2,
    city,
    country,
    zipCode,
  } = req.body;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const vendor = new Vendor({
      vendorName,
      bankAccountNo,
      bankName,
      addressLine1,
      addressLine2,
      city,
      country,
      zipCode,
    });
    await vendor.save();
    res.status(201).json({
      success: true,
      message: "Vendor Created",
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controller for getting paginated list of vendors
const getVendors = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const vendors = await Vendor.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await Vendor.countDocuments();
    res.json({
      vendors,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller for updating a vendor
const updateVendor = async (req, res) => {
  try {
    const { id } = req.params;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const updatedVendor = await Vendor.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ success: true, message: "Vendor Updated" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controller for deleting a vendor
const deleteVendor = async (req, res) => {
  try {
    const { id } = req.params;
    await Vendor.findByIdAndDelete(id);
    res.json({ success: true, message: "Vendor deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export { createVendor, getVendors, updateVendor, deleteVendor };
