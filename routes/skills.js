var express = require('express');
var router = express.Router();
var skillsCtrl = require("../controllers/skills")

// All actual path s start with "/skills"

// GET /todos
router.get("/", skillsCtrl.index)

//GET /todos/new 
router.get("/new", skillsCtrl.new)

router.get("/:id", skillsCtrl.show)

router.post("/", skillsCtrl.create)

module.exports = router;
