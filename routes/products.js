const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const db = require("../models");
const { Product } = db;

// ensure uploads/products exists
const uploadDir = path.join(__dirname, "..", "uploads", "products");
fs.mkdirSync(uploadDir, { recursive: true });

// multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || "";
    const name = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, name);
  }
});
const upload = multer({ storage });

// GET /api/products - list products
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({ order: [["createdAt", "DESC"]] });
    return res.json(products);
  } catch (err) {
    console.error("GET /products error", err);
    return res.status(500).json({ message: "Failed to load products" });
  }
});

// POST /api/products - create new product (multipart/form-data)
// fields: name, description, price, discount_price (optional), category, brand, sizes (comma), colors (comma)
// files: images (multiple)
router.post("/", upload.array("images", 10), async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discount_price,
      category,
      brand,
      sizes,
      colors,
      stock
    } = req.body;

    if (!name || !price) return res.status(400).json({ message: "Name and price are required" });

    // build images URLs relative to server static mount (/uploads)
    const images = (req.files || []).map(f => `/uploads/products/${f.filename}`);

    // parse sizes/colors if provided as CSV
    const sizesArr = sizes ? sizes.toString().split(",").map(s => s.trim()).filter(Boolean) : [];
    const colorsArr = colors ? colors.toString().split(",").map(c => c.trim()).filter(Boolean) : [];

    const product = await Product.create({
      name: name.toString(),
      description: description || "",
      price: Number(price) || 0,
      discount_price: discount_price ? Number(discount_price) : null,
      category: category || "",
      brand: brand || "",
      sizes: sizesArr,
      colors: colorsArr,
      images: images.length ? images : ["/uploads/products/default.png"],
      stock: Number(stock) || 0,
      rating: 0,
      reviews: 0
    });

    return res.status(201).json(product);
  } catch (err) {
    console.error("POST /products error", err);
    return res.status(500).json({ message: "Failed to create product" });
  }
});

module.exports = router;