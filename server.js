const express = require("express");
const path = require('path');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;


// Publico un directorio
app.use(express.static(path.join(__dirname, 'public')))

// Express HBS engine
hbs.registerPartials(path.join(__dirname, 'views', 'parciales'))
app.set('view engine', 'hbs');




app.get("/", (req, res) => {
    res.render('home', { nombre: 'nicolas esquivel', anio: new Date().getFullYear() });
});


app.get("/about", (req, res) => {
    res.render('about', { anio: new Date().getFullYear() })
});


app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});