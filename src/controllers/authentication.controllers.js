
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
const signUp = async (req, res) => {
    // TODO: traer datos del body (req.body)
    // comprobar si el usuario ya existe
    // si existe --> retornamos estado 403
    // si no existe --> encriptar contraseña, añadir a la bbdd (con save), crear token, retornar 200

    const {nombre, email, password} = req.body;
    try {
        const user = await User.findOne({email: email});
        if (user) {
            return res.status(403).json({
                ok: false,
                msg: "El usuario ya está registrado."
            })
        }

        // encriptar contraseña
        const salt = bcrypt.genSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(password, salt);
        
        // añadir a la bbdd
        const usuario = new User({nombre, email, password: encryptedPassword});
        const savedUser = await usuario.save();

        // crear token payload, secretOrPrivateKey, [options, callback]
        const token = jwt.sign({
            uid: savedUser._id,
            role: savedUser.role
            },
            'binf49hfifjfiuei',
            {
                expiresIn: '4h'
            }
        )
        return res.status(201).json({
            ok: true,
            savedUser
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Contacte con el administrador."
        })
    }
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