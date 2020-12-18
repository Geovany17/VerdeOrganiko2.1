const router = require("express").Router();
const authRoutes = require("./auth");

// API Routes
router.use("/api", authRoutes);

module.exports = router;
