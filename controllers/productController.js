const Product = require("../models/Product");

exports.list = async (req, res) => {
  try {
    const products = await Product.findAll({ order: [["id", "DESC"]] });
    res.json(products);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.get = async (req, res) => {
  try {
    const p = await Product.findByPk(req.params.id);
    if (!p) return res.status(404).json({ message: "Not found" });
    res.json(p);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.filter = async (req, res) => {
  // basic filter placeholder
  const { q } = req.body;
  try {
    const where = q ? { name: { [require("sequelize").Op.like]: `%${q}%` } } : {};
    const list = await Product.findAll({ where });
    res.json(list);
  } catch (err) { res.status(500).json({ message: err.message }); }
};