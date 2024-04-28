/*
//importamos express 
const express = require('express')

//guardamos 'express' en una contante llamada 'app'
const app = express()

//instancia del paquete EXPRESS, determinamos el puerto en el que abrirá, 3000 en este caso, seguido de una funcón flecha sin parámetros, que manda se muestre un mensaje en la consola del terminal cuando se 'levante' el servidor
app.listen(3000, () => {
    console.log('El servidor está inicializado en el puerto 3000')
})

// Paso 1 Agregar un middleware para la ruta /Tiempo
app.use("/Tiempo", (req, res, next) => {

    const Authorization = "pedrito";
    // Paso 2 Utilizar el parámetro “request” y su método “header” para almacenar en una constante el valor de la propiedad “Authorization”
    const Auth = req.header("Authorization");

    // Paso 3 Através de un operador ternario, evalúa la constante creada en el paso anterior y en caso de ser “true”, ejecutar el parámetro “next()”, de lo contrario responder con un mensaje “¿Quién es?”
    Auth ? next() : res.send("Usted no está autorizado");

});

// Paso 4 Crear una ruta GET/Tiempo
app.get("/Tiempo", (req, res) => {

// Paso 5 Crear y devolver un objeto que incluya la fecha actual. Para esto, ocupa el Date.now()
const tiempo = { time: Date.now() };
    res.send(tiempo);
});
*/

// Paso 1 Crear un servidor con Express que escuche el puerto 3000
const express = require("express");
const app = express();

// Paso 2 Ocupar un middleware y el método “static” de Express para declarar la carpeta “assets” como directorio público del servidor.
app.use(express.static("assets"));
// Paso 3 Crear una ruta GET raíz que devuelva el documento index.html.
app.get("/", (req, res) => {
    //sendFile permite devolver un archivo especificando su ruta como argumento, en este caso devuelve el index.html.  __dirname es una variable  que contiene la referencia a la dirección del árbol de archivos donde se ubica el archivo
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
    console.log("El servidor express está inicializado en el puerto 3000");
});