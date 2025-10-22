const Order = require("../models/Order");

exports.create = async (req, res) => {
  const userId = req.user?.id;
  const { total_amount, address } = req.body;
  try {
    const order = await Order.create({ user_id: userId, total_amount, address, status: "placed" });
    res.json(order);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getByUser = async (req, res) => {
  const userId = req.params.userId;
  const orders = await Order.findAll({ where: { user_id: userId }});
  res.json(orders);
};