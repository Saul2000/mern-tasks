const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database')

const app = express();

//SETTINGS
app.set('port', process.env.PORT || 3000); //Indicar que busque un puerto disponible o bien que se ejecute en el 3000

//MIDDLEWARES: Funciones que se ejecutan antes de que lleguen a las rutas
app.use(morgan('dev')); //Morgan para recibir en consola las respuestas del servidor
app.use(express.json()); //Cada vez que llegue un dato va a pasar por esta función

//ROUTES
app.use('/api/tasks', require('./routes/task.routes'));

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));
// console.log(path.join(__dirname, 'public')); //Contiene la dirección del archivo actual Y PATH.JOIN concatena dos direcciones de archivos para poder direccionar

//STARTING THE SERVER
app.listen(app.get('port'), () => {
    console.log(`Server On Port ${app.get('port')}`);
});


