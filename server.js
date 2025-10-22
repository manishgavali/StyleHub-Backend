require("dotenv").config();
const app = require("./app"); // use the configured app from app.js
const PORT = process.env.PORT || 5000;

// Mount admin router (if it exists)
const adminRouter = require("./routes/admin");
app.use("/api/admin", adminRouter);

// Start server after DB init
app.initDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch(err => {
    console.error("DB init failed:", err);
    process.exit(1);
  });
