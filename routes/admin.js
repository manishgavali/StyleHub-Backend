const express = require("express");
const router = express.Router();
const seedDb = require("../utils/seedDb");

// POST /api/admin/seed  -> run seeder
router.post("/seed", async (req, res) => {
  try {
    const total = await seedDb();
    return res.json({ ok: true, total });
  } catch (err) {
    console.error("Seeder error:", err);
    return res.status(500).json({ ok: false, message: err.message || "Seeding failed" });
  }
});

router.get("/seed", async (req, res) => {
  try {
    const total = await seedDb();
    return res.json({ ok: true, total });
  } catch (err) {
    console.error("Seeder error:", err);
    return res.status(500).json({ ok: false, message: err.message || "Seeding failed" });
  }
});

module.exports = router;