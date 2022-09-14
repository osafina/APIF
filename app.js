
const express = require('express');
const app= express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const product = require('./routes/productos');
const user = require('./routes/usuarios');

app.use('/products',product);
app.use('/users',user);
app.listen(3001, () => {console.log('Servidor andando en el puerto 3001')});