
// Crear el servidor

const express = require('express');

const cors = require('cors');

const publicRoutes = require('./routes/public.routes');
const adminRoutes = require('./routes/admin.routes');
const authRoutes = require('./routes/authentication.routes');

const {connection} = require('./utils/dbconnect')

require('dotenv').config();

const port = process.env.PORT || 3000;


// Hacer uso de express
const app = express();

// Ejecutar conexión
connection().catch((error) => {
    //  Enviar un objeto o incluso un render con la página 404 (esto para el front)
    console.log(error);
})

// MIDDLEWARES
    // origin [ruta del front]
const whiteList = ['http://localhost:3000', 'http://xxxx-front.render.com'];
app.use(cors({
    origin: whiteList
}));

// Parsear lo que entra del formulario del body o del json
app.use(express.urlencoded());
app.use(express.json());

// RUTAS
    // No vamos a tener todas las rutas aquí, las tendremos en la carpeta rutas
    // get toma como argumentos la ruta y la función controladora
// app.get('/', (req, res) => {
//     res.send('<h1>Hola Mundo</h1>');
// }) 

// para hacer uso de ella necesitaremos el middleware use. Llamamos al archivo en routes
    // ante esta url ('/api/v1'), lo gestiona este archivo ./routes/public.routes
app.use('/api/v1', publicRoutes);

app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/auth', authRoutes);

// Poner la aplicación a la escucha del puerto
app.listen(port, () => {
    console.log(`Server on port ${port}`);
})

