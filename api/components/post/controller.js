const TABLA = 'post';

module.exports = function(injectedStore){
    let store = injectedStore;
    if(!store){
        const store = require('../../../store/dummy');
    }

    
    function list() {
        return store.list(TABLA);
    }

    return {
        list,
    }
}


