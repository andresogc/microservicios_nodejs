const jwt = require('jsonwebtoken');
const config = require('../config');
const secreto = config.jwt.secret;

function sign(data){
    return jwt.sign(data,secreto);
}

function verify(token) {
    return jwt.verify(token,secreto)
}

const check = {
    own: function(req,owner){ 
        const decoded = decodeHeader(req);
        console.log('decoded',owner);
        //comprobar si es o no propio
        if(decoded.id !== owner){
            throw new Error('No tienes permiso para esta acción');
        }
    },

}

function getToken(auth) {
    if(!auth){
        throw new Error('No viene token');
    }

    if (auth.indexOf('Bearer ') === -1)  {
        throw new Error('Formato invalido');
    }

    let token = auth.replace('Bearer ','');

    return token;
}


function decodeHeader(req) { 
    const authorization = req.headers.authorization || ''; 
    const token = getToken(authorization);
    const decoded = verify(token); 

    req.user = decoded;

    return decoded;

}

module.exports = {
    sign,
    check
}