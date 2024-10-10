const Vendor = require('../models/Vendors');

// Get all vendors
exports.getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get vendor by ID
exports.getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (vendor) {
      res.json(vendor);
    } else {
      res.status(404).json({ message: 'Vendor not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new vendor
exports.createVendor = async (req, res) => {
  const vendor = new Vendor(req.body);
  try {
    const newVendor = await vendor.save();
    res.status(201).json(newVendor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a vendor
exports.updateVendor = async (req, res) => {
  try {
    const updatedVendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedVendor) {
      res.json(updatedVendor);
    } else {
      res.status(404).json({ message: 'Vendor not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a vendor
exports.deleteVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndDelete(req.params.id);
    if (vendor) {
      res.status(204).json({ message: 'Vendor deleted' });
    } else {
      res.status(404).json({ message: 'Vendor not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
