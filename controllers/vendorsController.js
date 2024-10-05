const fs = require('fs');
const path = require('path');
const vendorsDataPath = path.join(__dirname, '../data/vendors.json');

const readVendorsData = () => {
  const data = fs.readFileSync(vendorsDataPath);
  return JSON.parse(data);
};

const writeVendorsData = (data) => {
  fs.writeFileSync(vendorsDataPath, JSON.stringify(data, null, 2));
};

exports.getAllVendors = (req, res) => {
  const vendors = readVendorsData();
  res.json(vendors);
};

exports.getVendorById = (req, res) => {
  const vendors = readVendorsData();
  const vendor = vendors.find(v => v.id === parseInt(req.params.id));
  if (vendor) {
    res.json(vendor);
  } else {
    res.status(404).send('Vendor not found');
  }
};

exports.createVendor = (req, res) => {
  const vendors = readVendorsData();
  const newId = vendors.length > 0 ? Math.max(...vendors.map(v => v.id)) + 1 : 1; // Generate new ID
  const newVendor = { id: newId, ...req.body };
  vendors.push(newVendor);
  writeVendorsData(vendors);
  res.status(201).json(newVendor);
};

exports.updateVendor = (req, res) => {
  const vendors = readVendorsData();
  const index = vendors.findIndex(v => v.id === parseInt(req.params.id));
  if (index !== -1) {
    vendors[index] = { id: vendors[index].id, ...req.body };
    writeVendorsData(vendors);
    res.json(vendors[index]);
  } else {
    res.status(404).send('Vendor not found');
  }
};

exports.deleteVendor = (req, res) => {
  const vendors = readVendorsData();
  const index = vendors.findIndex(v => v.id === parseInt(req.params.id));
  if (index !== -1) {
    vendors.splice(index, 1);
    writeVendorsData(vendors);
    res.status(204).send();
  } else {
    res.status(404).send('Vendor not found');
  }
};
