const auth = require('../../../auth')

module.exports= function checkAuth(action){

    function middleware(req,res,next){ 
        switch (action) {
            case 'update':
                let owner = req.body.id;  
                auth.check.own(req,owner);
                next();
                break;
        
            default:
                break;
        }
    }

    return middleware;
}