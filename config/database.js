const { Sequelize } = require("sequelize");
require("dotenv").config();

// Use environment variables for production; defaults are optional
const sequelize = new Sequelize(
  process.env.DB_NAME || "stylehub_db",       // Database name
  process.env.DB_USER || "postgres",         // Database user
  process.env.DB_PASSWORD || "password",     // Database password
  {
    host: process.env.DB_HOST || "localhost", // Render Postgres host
    port: process.env.DB_PORT || 5432,        // Default Postgres port
    dialect: "postgres",                       // Change from 'mysql' to 'postgres'
    logging: false                             // Optional: disable SQL logs
  }
);

module.exports = sequelize;
