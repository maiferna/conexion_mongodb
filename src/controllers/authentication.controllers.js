
// LOGIN
const login = (req, res) => {
    // TODO: recoger datos del body
    // Comprobar si el usuario existe
    // si no existe --> retornar estado 403
    // si existe --> comprobar si la contraseña coincide (en la documentación de bcrypt está el método compareSync)
        // si no coincide --> 403
        // si existe --> crear token, devolver 202 usuario y token
        // bcrypt.comparesync (password, usuario.password)

    return res.status(200).json({
        ok: true,
        msg: 'Entrando en login.'
    })
}

// REGISTRO
const signUp = (req, res) => {
    // TODO: traer datos del body (req.body)
    // comprobar si el usuario ya existe
    // si existe --> retornamos estado 403
    // si no existe --> encriptar contraseña, añadir a la bbdd (con save), crear token, retornar 200

    return res.status(201).json({
        ok: true,
        msg: 'Entrando en registro.'
    })
}

// RENEWTOKEN
const renewToken = (req, res) => {
    // TODO: Obtener usuario
    // Comprobar que hay token y que sea válido
    // si no lo hay --> retornar 403
    // si lo hay --> generar otro token

    return res.status(200).json({
        ok: true,
        msg: 'Entrando en renewtoken.'
    })
}

module.exports = {
    login,
    signUp,
    renewToken
}