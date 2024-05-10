import Vendor from "../models/vendor.model.js";

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
    res.status(201).json(vendor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

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

const updateVendor = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedVendor = await Vendor.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedVendor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteVendor = async (req, res) => {
  try {
    const { id } = req.params;
    await Vendor.findByIdAndDelete(id);
    res.json({ message: "Vendor deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export { createVendor, getVendors, updateVendor, deleteVendor };
