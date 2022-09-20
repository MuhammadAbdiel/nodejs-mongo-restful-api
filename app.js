const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectToDb } = require("./utils/db");
require("dotenv/config");

// Import Router
const postsRoute = require("./routes/posts");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/posts", postsRoute);

// Routes
app.get("/", (req, res) => {
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

connectToDb();
