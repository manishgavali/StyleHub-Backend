const User = require("../models/User");

exports.profile = async (req, res) => {
  const userId = req.user?.id;
  const user = await User.findByPk(userId, { attributes: ["id", "name", "email", "phone", "created_at"] });
  res.json(user);
};