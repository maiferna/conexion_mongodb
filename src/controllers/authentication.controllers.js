
// LOGIN
const login = (req, res) => {
    return res.status(200).json({
        ok: true,
        msg: 'Entrando en login.'
    })
}

// LOGOUT
const logout = (req, res) => {
    return res.status(200).json({
        ok: true,
        msg: 'Entrando en logout.'
    })
}

// REGISTRO
const signUp = (req, res) => {
    return res.status(200).json({
        ok: true,
        msg: 'Entrando en registro.'
    })
}

// RENEWTOKEN
const renewToken = (req, res) => {
    return res.status(200).json({
        ok: true,
        msg: 'Entrando en renewtoken.'
    })
}

module.exports = {
    login, 
    logout,
    signUp,
    renewToken
}