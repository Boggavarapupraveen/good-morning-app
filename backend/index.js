const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "praveen",
  port: 5432,
});

pool.query(`CREATE TABLE IF NOT EXISTS users (
  name TEXT,
  phone TEXT,
  email TEXT
)`);

app.post("/api/users", async (req, res) => {
  const { name, phone, email } = req.body;
  try {
    await pool.query(
      "INSERT INTO users (name, phone, email) VALUES ($1, $2, $3)",
      [name, phone, email]
    );
    res.status(201).send("Data inserted");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
