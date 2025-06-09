
// ENTRAR EN ADMIN
const getInAdmin = (req, res) => {
   return res.status(200).json({
        ok: true,
        msg: 'Entrando en admin.'
    })
}

module.exports = {
    getInAdmin
}