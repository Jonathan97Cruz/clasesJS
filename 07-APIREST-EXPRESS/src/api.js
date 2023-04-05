const express = require('express');//Para importar express
const mongoose = require('mongoose');//importar mongoose
const user = require('./user.handler');//importando nuestro handler

const app = express();//creacion de api con express
const port = 3000;
app.use(express.json());//convertir los json a JS

mongoose.connect('mongodb+srv://jonnycruz66:shlar619jonny@cluster0.8iivxky.mongodb.net/api-db?retryWrites=true&w=majority');//conexion con MongoDB

app.get('/api/', user.list);//path y funcion(handler)
app.post('/api/', user.create);
app.get('/api/:id', user.get);
app.put('/api/:id', user.update);
app.delete('/api/:id', user.delete);


//donde vamos a ejecutar nuestra app y salida del servidor de la app
app.listen(port, () =>{
    console.log(`El ejemplo se esta ejecutando en el puerto ${port}`);
    console.log('Run in: http://localhost:3000/api');
})
