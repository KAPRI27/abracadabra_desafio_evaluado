

// Paso 1 Crear un servidor con Express que escuche el puerto 3000
const express = require("express");
const fs = require ("fs"); //**
const PORT = process.env.PORT || 3000;  //** 
const app = express();



// Paso 2 Ocupar un middleware y el método “static” de Express para declarar la carpeta “assets” como directorio público del servidor.
app.use(express.static("assets"));
// ESTO HACE QUE SE VEA EL HTML AL CORRER CON NODE EL ARCHIVO JS.  Crear una ruta GET raíz que devuelva el documento index.html.
app.get("/", (req, res) => {
    //sendFile permite devolver un archivo especificando su ruta como argumento, en este caso devuelve el index.html.  __dirname es una variable  que contiene la referencia a la dirección del árbol de archivos donde se ubica el archivo. eN ESTE CASO EL index.html
    res.sendFile(__dirname + "/index.html")
})


//Se debe devolver un JSON con un arreglo de nombres alojado en el servidor.
app.get("/abracadabra/usuarios", (req, res) => {
    //sendFile permite devolver un archivo especificando su ruta como argumento, en este caso devuelve el archivo JSON 
    res.sendFile(__dirname + "/usuarios.json")
})



//************

//A través de un middleware, verificar que el usuario escrito como parámetro existe en el arreglo alojado en el servidor
//Autenticar si existe el usuario en el json o no  usando esta ruta  /abracadabra/juego/:usuario
app.use("/abracadabra/juego/:usuario", (req, res, next) => {

    // Paso 2 Utilizar el parámetro “request” y su método “header” para almacenar en una constante el valor de la propiedad “Authorization”
    const Auth = req.header("Authorization");
    //**const usuarios = req.usuarios.json(usuarios())
    // Paso 3 Através de un operador ternario, evalúa la constante creada en el paso anterior y en caso de ser “true”, ejecutar el parámetro “next()”, de lo contrario responder con un mensaje “¿Usted no está autorizado por Mr Bunny?”
    Auth ? next() : res.send("Usted no está autorizado por Mr Bunny");

});

// Paso 4 Crear una ruta GET//abracadabra/juego/:usuario
app.get("/abracadabra/juego/:usuario", (req, res) => {

// Paso 5 Crear y devolver un objeto que incluya la fecha actual. Para esto, ocupa el Date.now()
const usuario = { data : usuarios };
    res.send(usuario);

});

/*
app.get("/abracadabra", (req, res) => {
    res.send("Quién es? &#128526;")    // aqui hay que poner el WHO
})
*/

//5 Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el número generado de forma aleatoria. En caso de ser exitoso, devolver la imagen del conejo, de lo contrario devolver la imagen de Voldemort. (2 Puntos)
app.get('/abracadabra/conejo/:numero/', (req, res) => {
    //res.send(req.params.id)
    
    // Paso 2 Ocupar el objeto Math para generar un número entero aleatorio entre 1 y 3.
    const n = Math.floor(Math.random() * (4-1)) + 1;
    // Paso 3 Utilizar la propiedad “params” del objeto request para guardar en una constante el parámetro “numero”.
    const numero = req.params.numero;
    // Paso 4 Utilizar un operador ternario para evaluar que el número generado de forma aleatoria, sea igual al recibido en la ruta como parámetro.
    numero == n
    ? res.send("Hoy estás de suerte ;)" + `<img src="../conejito.jpg" alt="Conejito blanco esponjoso" />`):   //aquí hay que poner la ruta que lleve a la foto del conejo
    //res.send("Buena suerte para la próxima..." + `<img src="../voldemort.jpg">`); //aqui hay que poner la ruta que lleve a la imagen de Voldemort
    res.send("Buena suerte para la próxima..." + `<img src="../voldemort.jpg" alt="Voldemort" />`); 
});


/* 
// Ruta para enviar la imagen
app.get('/imagen', (req, res) => {
    // Lee el contenido de la imagen
    fs.readFile('assets/img/conejito.jpg', (err, data) => {
        if (err) {
            console.error('Error al leer la imagen', err);
            return res.status(500).send('Error interno del servidor');
        }

        // Establece el tipo de contenido de la respuesta como imagen JPEG
        res.contentType('image/jpeg');

        // Envía el contenido de la imagen como respuesta
        res.send(data);
    });
});

*/

//SERVIDOR EXPRESS EN PUERTO 3000
app.listen(3000, () => {
    console.log("El servidor express está inicializado en el puerto 3000");
    
});



//EJEMPLO DE AUTORIZATION

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