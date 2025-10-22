const Cart = require("../models/Cart");

exports.getCart = async (req, res) => {
  const userId = req.user?.id;
  if (!userId) return res.status(401).json({ message: "Unauthorized" });
  const items = await Cart.findAll({ where: { user_id: userId }});
  res.json(items);
};

exports.add = async (req, res) => {
  const userId = req.user?.id;
  const { product_id, quantity = 1 } = req.body;
  const found = await Cart.findOne({ where: { user_id: userId, product_id }});
  if (found) {
    found.quantity += quantity;
    await found.save();
    return res.json(found);
  }
  const item = await Cart.create({ user_id: userId, product_id, quantity });
  res.json(item);
};

exports.update = async (req, res) => {
  const { id, quantity } = req.body;
  const item = await Cart.findByPk(id);
  if (!item) return res.status(404).json({ message: "Not found" });
  item.quantity = quantity;
  await item.save();
  res.json(item);
};