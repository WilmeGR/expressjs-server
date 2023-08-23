require('dotenv').config();
const express = require('express');
const app = express();
const port =process.env.PORT;

//servir contenido en estatico

app.use(express.static('public'));

app.get ('/generic', (req, res) => {

    res.sendFile(__dirname + '/public/generic.html');


});


app.listen(port, () => {

   console.log(`ESTA ESCUCHANDO EN EL PUERTO ${port}`) 

});