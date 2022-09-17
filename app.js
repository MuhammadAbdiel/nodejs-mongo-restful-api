const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

// Connect to DB
async function connectToDb() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.poo9ipk.mongodb.net/test`
    );
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Connected to DB!");
  }
}

connectToDb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
