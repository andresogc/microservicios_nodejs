const { nanoid } = require('nanoid');
const auth = require('../auth');

const TABLA = 'user';

module.exports = function(injectedStore){
    let store = injectedStore;
    if(!store){
        const store = require('../../../store/dummy');
    }
    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA,id);
    }

    async function upsert(body){ 
        var regnew = false;//indica si el registro es nuevo(insert)  o es una edicion(update)
        const user = {
            name:body.name,
            username:body.username,
        }
        if(body.id){
            user.id = body.id;
        }else{
           user.id = nanoid();
           regnew=true;
        }

        if(body.password || body.username){
            await auth.upsert({  
                id:user.id,
                username:user.username,
                password:body.password
            },regnew)
        }

        return store.upsert(TABLA,user,regnew)
    }

    return {
        list,
        get,
        upsert
    }    
}

