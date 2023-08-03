
const Skill = require("../models/skill")

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteSkill,
    edit,
    update
}

function index(req, res) {
    res.render("skills/index", {
        skills: Skill.getAll()
    })
}

function show(req, res) {
    res.render("skills/show", {
        skill: Skill.getOne(req.params.id)
    })
}

function newTodo(req, res) {
    res.render("skills/new", {title: "New Skill"})
}

function create(req, res) {
    console.log(req.body)
    //the model is responsible for creating data
    Skill.create(req.body)
    //do a redirect anytime data is changed
    res.redirect("/skills")
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect("/skills")
}

function edit(req, res) {
    res.render("skills/edit", {
        title: "Edit Skill",
        skill: Skill.getOne(req.params.id)
    })
}

function update(req, res) {
    Skill.update(req.params.id, req.body)
    res.redirect(`/skills/${req.params.id}`)
}