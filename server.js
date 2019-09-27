const express = require('express')
const app = express()
const config = require('./config')

const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Victoriasaurio',
    }); //Renderiza home.hbs
})

app.get('/about', (req, res) => {
    res.render('about', {}); //posiciona la pantalla about
})


app.listen(config.port, () => {
    console.log(`Escuchando en el puerto ${config.port} Tony Stark`);
})