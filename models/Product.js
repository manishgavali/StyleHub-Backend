const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define("Product", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  price: { type: DataTypes.FLOAT, allowNull: false },
  discount_price: { type: DataTypes.FLOAT },
  category: { type: DataTypes.STRING },
  brand: { type: DataTypes.STRING },
  // changed to JSON arrays for sizes/colors
  sizes: { type: DataTypes.JSON },
  colors: { type: DataTypes.JSON },
  images: { type: DataTypes.JSON },
  stock: { type: DataTypes.INTEGER, defaultValue: 0 },
  rating: { type: DataTypes.FLOAT, defaultValue: 0 },
  reviews: { type: DataTypes.INTEGER, defaultValue: 0 }
}, { tableName: "Products", timestamps: true });

module.exports = Product;