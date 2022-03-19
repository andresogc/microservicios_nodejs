const store = require('../../../store/dummy');

const tabla = 'user';

function list() {
    return store.list(tabla);
}

module.exports = {
    list,
}