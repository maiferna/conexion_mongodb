
const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
    const header = req.header('Authorization');
    const token = header.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: "No tiene autorización."
        })
    }
    try {
        const secret_key = process.env.JWT_SECRET_KEY;
        const payload = jwt.verify(token, secret_key);
        req.uid = payload.uid;
        req.role = payload.role;
        next();
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: "El token no es válido."
        })
    }
}


module.exports = {
    verifyToken
}


// 1: ver cómo el cliente envía el token al servidor

    // cuando el cliente envía una solicitud de autenticación al servidor, éste enviará un token JSON al cliente, que incluye toda la información sobre el usuario con la respuesta.
    //el cliente debe enviar este token al servidor mediante la solicitud HTTP en un encabezado llamado Authorizationcon el formato Bearer [JWT_TOKEN].

    // Authorization Bearer <token>

    // la cabecera HTTP “Authorization: Bearer <token>” se utiliza comúnmente en el protocolo HTTP para autenticar y autorizar solicitudes.
        // Authorization: se utiliza para enviar credenciales de autenticación al servidor
        // Bearer: es un tipo de esquema de autenticación que en este caso, indica que se está proporcionando un token de acceso
        // <token> el token que emite el servidor
        //const header = req.header("Authorization");

// 2: Comprobar que el token es válido (mirar documentación de JWT)

    // Middleware verifyToken: Se utiliza para verificar la validez del token antes de permitir el acceso al recurso protegido.
    // Si el token es válido, se extrae la información del usuario del payload del JWT y se pasa al siguiente middleware o controlador. Si no se proporciona un token o si el token no es válido, se devuelve un código de estado correspondiente con un mensaje de error.

    /*
    function verifyToken(req, res, next) {
        try {
            const payload = jwt.verify(token, secretKey);
            req.username = payload.username;
            next();
        } catch (error) {
            return res.status(403).json({ message: "Token not valid" });
        }
    }
    */

// 3: Cómo almacenar en el req los datos del payload
    // Al verificar el token, se pueden extraer los datos del payload y guardarlos en req
    // req.uid = payload.uid;
    // req.role = payload.role;


