const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const auth = require("../middleware/auth");

router.post("/", auth, orderController.create);
router.get("/:userId", auth, orderController.getByUser);

module.exports = router;