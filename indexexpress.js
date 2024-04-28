//importamos express 
const express = require('express')

//guardamos 'express' en una contante llamada 'app'
const app = express()

//instancia del paquete EXPRESS, determinamos el puerto en el que abrirá, 3000 en este caso, seguido de una funcón flecha sin parámetros, que manda se muestre un mensaje en la consola del terminal cuando se 'levante' el servidor
app.listen(3000, () => {
    console.log('El servidor está inicializado en el puerto 3000')
})


app.get("/abracadabra", (req, res) => {
    res.send("Quién es? &#128526;")
})

// Paso 1 Agregar una ruta GET/azar/:numero
app.get('/abracadabra/conejo/:numero/', (req, res) => {
    //res.send(req.params.id)
    // Paso 2 Ocupar el objeto Math para generar un número entero aleatorio entre 1 y 3.
    const n = Math.floor(Math.random() * (4-1)) + 1;
    // Paso 3 Utilizar la propiedad “params” del objeto request para guardar en una constante el parámetro “numero”.
    const numero = req.params.numero;
    // Paso 4 Utilizar un operador ternario para evaluar que el número generado de forma aleatoria, sea igual al recibido en la ruta como parámetro.
    numero == n
    ? res.send(`<h1>Hoy estás de suerte 🥳</h1>` + `<img src="../conejito.jpg" alt="Conejito" />`):   //aquí hay que poner la ruta que lleve a la foto del conejo
    res.send(`<h1>Buena suerte para la próxima...🥺</h1>` + `<img src="../voldemort.jpg" alt="Voldemort">`); //aqui hay que poner la ruta que lleve a la imagen de Voldemort
});


app.get("/estudiar", function(req, res) {
    // Paso 2 En la respuesta redireccionamos a la página de Desafio Latam
    res.redirect("https://desafiolatam.com/");
});


/*
//importamos express 
const express = require('express')

//guardamos 'express' en una contante llamada 'app'
const app = express()

//instancia del paquete EXPRESS, determinamos el puerto en el que abrirá, 3000 en este caso, seguido de una funcón flecha sin parámetros, que manda se muestre un mensaje en la consola del terminal cuando se 'levante' el servidor
app.listen(3000, () => {
    console.log('El servidor está inicializado en el puerto 3000')
})


app.get("/Inicio", (req, res) => {
    res.send("Hola mundo! Servidor con Express js &#128526;")
})
*/