// TODO: promesa
const jwt = require('jsonwebtoken');

const createToken = (id, role) => {
    return jwt.sign({
        uid: id,
        role: role
    },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: '2h'
        }
    )
}

module.exports = {
    createToken
}