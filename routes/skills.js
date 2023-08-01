var express = require('express');
var router = express.Router();
var skillsCtrl = require("../controllers/skills")

// All actual path s start with "/skills"

// GET /todos
router.get("/", skillsCtrl.index)

module.exports = router;
