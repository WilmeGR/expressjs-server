const express = require('express');
const cors = require('cors');

class Server {


    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        this.router();

    }

    middlewares() {

        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public') );
    }
    router(){
        this.app.use(this.usuariosPath, require('../routes/usuarios.route'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ', this.port);

        });
    }
}


module.exports = Server;