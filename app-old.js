const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-type': 'aplication/json' });

        let salida = {
            nombre: 'Victoria',
            edad: 20,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //res.write('Hola mundo');
        res.end();
    })
    .listen(3000);

console.log('Escuchando el puerto 3000 de Tony Stark');