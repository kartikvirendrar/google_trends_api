const express = require("express");
const { interestOverTimeKeyword } = require("../controllers/interestOverTime");
const router = express.Router();

router.get("/interest-over-time/:keyword", interestOverTimeKeyword);

module.exports = router;