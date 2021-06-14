const add = (a, b) => {
    if (a == null || b == null) { return null } else { return a + b; }
}

const sub = (a, b) => {
    if (a == null || b == null) { return null } else { return a - b; }
}

const divide = (a, b) => {
    if (a == null || b == null || a === 0) { return null } else { return a / b; }
}

const mult = (a, b) => {
    if (a == null || b == null) { return null } else { return a * b; }
}

module.exports = {
    add: add,
    sub: sub,
    divide: divide,
    mult: mult
}
