//Sintais básica para levantar el servidor express
const express = require('express'); //Importar librería express
const app = express(); //Instanciar la aplicación
const mongoose = require('mongoose'); //Importar librería mongoose

const port = process.env.PORT || 3000; //Configuración del puerto del servidor escuchado por la aplicación: url proporcionada por Vercel o puerto local 3000

app.use(express.static('public')); //Configuración del middleware (express.static) para servir archivos estáticos desde la carpeta 'public' (método use) --> puede ser accedido directamente por el navegador

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); //Configuración de la ruta para manejar las peticiones get a las páginas HTML. __dirname es una constante de node.js que representa la ruta del directorio actual en el que se encuentra el archivo que se está ejecutando.
  });                                               //Al configurar las peticiones get, cuando alguien accede a estas url en su navegador, el servidor envía el contenido de las páginas html correspondientes, como respuesta. 
  
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
  });

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
})