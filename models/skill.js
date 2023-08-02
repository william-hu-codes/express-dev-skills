module.exports = {
    getAll,
    getOne,
    create
    deleteOne
}

// const skills = {
//     JavaScript: {
//         id: 1,
//         learned: true
//     },
//     HTML: {
//         id: 2,
//         learned: true
//     },
//     CSS: {
//         id: 3,
//         learned: true
//     },
//     Python: {
//         id: 4,
//         learned: false
//     },
//     Mongoose: {
//         id: 5,
//         learned: false
//     }
// }

const skills = [
    {skill: "JavaScript", id: 128193, learned: true},
    {skill: "HTML", id: 182372, learned: true},
    {skill: "CSS", id: 123948, learned: true},
    {skill: "Python", id: 108217, learned: false},
    {skill: "Mongoose", id: 102847, learned: false}
]

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill=> skill.id === id)
}

function create(data) {
    const newSkill = {...data}
    newSkill.learned = data.learned ? true : false
    newSkill.id = Date.now() % 1000000
    skills.push(newSkill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex((skill) => skill.id === id)
    skills.splice(idx, 1)
}