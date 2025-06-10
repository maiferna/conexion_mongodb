
const jwt = require('jsonwebtoken');

jwt.sign({
    uid: savedUser._id,
    role: savedUser.role
},
    'binf49hfifjfiuei',
    {
        expiresIn: '4h'
    }
)