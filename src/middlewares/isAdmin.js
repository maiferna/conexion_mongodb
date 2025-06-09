
// Crear la función middleware isAdmin para verificar si el usuario tiene acceso a admin
const isAdmin = (req, res, next) => {
    // Cuerpo del mensaje que se envía desde body
    if (req.body.isAdmin) {
        next();
    } else {
        res.status(403).send(`No esta autorizado para acceder al administrador.`)
    }
}


module.exports = {
    isAdmin
}