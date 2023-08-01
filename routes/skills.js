var express = require('express');
var router = express.Router();
var skillsCtrl = require("../controllers/skills")

// All actual path s start with "/skills"

// GET /todos
router.get("/", skillsCtrl.index)

router.get("/:id", skillsCtrl.show)

module.exports = router;
