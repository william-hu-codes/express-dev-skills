module.exports = {
    getAll,
    getOne
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
    {skill: "JavaScript", id: 1, learned: true},
    {skill: "HTML", id: 2, learned: true},
    {skill: "CSS", id: 3, learned: true},
    {skill: "Python", id: 4, learned: false},
    {skill: "Mongoose", id: 5, learned: false}
]

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill=> skill.id === id)
}