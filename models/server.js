const express = require('express');
const cors = require('cors');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.contactPath = '/api/contact';
        this.dummyPath = '/api/dummy';

        // Middlewares
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();


    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

    }

    routes() {
        this.app.use(this.contactPath, require('../routes/contact'));
        this.app.use(this.dummyPath, require('../routes/dummy-routes'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }


}

module.exports = Server;