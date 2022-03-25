const express = require('express');
const bodyParser = require('body-parser');


const config = require('../config.js'); 
const user = require('./components/user/network');
const auth = require('./components/auth/network');

const errors = require('../network/errors'); 


const app = express();

app.use(bodyParser.json());

//ROUTER
app.use('/api/user', user);
app.use('/api/auth', auth);

app.use(errors);   //middleware de errors debe ir siempre de ultimas sino no actuaria con los componentes que esten despues

app.listen(config.api.port,()=>{
    console.log('Api escuchando en el puerto', config.api.port);
});

