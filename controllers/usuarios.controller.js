const { response } = require('express');


const usuariosGet =( req, res = response ) => {

    res.json({
        msg: 'get api - controller'
    })
}

const usuariosPut = (req, res )=> {

    const { id } =  req.params;

    res.json({
        msg: 'put api -  controller',
        id
    })
}

const usuariosPost = (req, res) => {
    res.json({
        msg: 'post api - controller'
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete api - controller'
    })
}
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}