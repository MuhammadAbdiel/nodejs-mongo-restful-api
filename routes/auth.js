const express = require("express");
const router = express.Router();
const { register } = require("../controllers/RegisterController");

router.post("/register", async (req, res) => {
  await register(req, res);
});
router.post("/login", (req, res) => {});

module.exports = router;
