var express = require('express');
var router = express.Router();
var skillsCtrl = require("../controllers/skills")

// All actual path s start with "/skills"

// GET /todos
router.get("/", skillsCtrl.index)

//GET /todos/new 
router.get("/new", skillsCtrl.new)

router.get("/:id", skillsCtrl.show)

//GET /todos/:id/edit
router.get("/:id/edit", skillsCtrl.edit)

router.post("/", skillsCtrl.create)

router.delete("/:id", skillsCtrl.delete)

module.exports = router;
