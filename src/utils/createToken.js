// TODO: promesa
const jwt = require('jsonwebtoken');

const createToken = (id, role) => {
    return jwt.sign({
        uid: id,
        role: role
    },
        'binf49hfifjfiuei',
        {
            expiresIn: '4h'
        }
    )
}

module.exports = {
    createToken
}