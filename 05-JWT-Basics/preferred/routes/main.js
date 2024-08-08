const express = require("express");
const router = express.Router();

const { logon, hello } = require("../controllers/main");

// import authenticationMiddleware
const authMiddleware = require("../middleware/auth");

////////////////////////////////////////////////////////////

// router.route("/dashboard").get(authMiddleware, dashboard);

router.route("/hello").get(authMiddleware, hello);

router.route("/logon").post(logon);

////////////////////////////////////////////////////////////
module.exports = router;
