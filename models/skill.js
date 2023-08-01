module.exports = {
    getAll
    getOne
}

const skills = {
    JavaScript: {
        id: 1,
        learned: true
    },
    HTML: {
        id: 2,
        learned: true
    },
    CSS: {
        id: 3,
        learned: true
    },
    Python: {
        id: 4,
        learned: false
    },
    Mongoose: {
        id: 5,
        learned: false
    }
}

function getAll() {
    return skills
}

function getOne(id) {
    id = number(id)
    for (key in skills) {
        if (skills[key].id === id) return (key + skills[key])
    }
}