const Sequelize = require("sequelize");
const sequelize = require("../config/database");

// Import models
const Product = require("./Product");
// require other models here if you have them, e.g.
// const User = require("./User");

const db = {
  sequelize,
  Sequelize,
  Product,
  // add other models here
};

module.exports = db;