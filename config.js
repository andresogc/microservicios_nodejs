module.exports = {
    api:{
        port:process.env.API_PORT || 3000,
    },
    jwt:{
        secret: process.env.JWT_SECRET || 'notasecret!'
    },
    mysql:{
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || '',
        database: process.env.MYSQL_DB || 'db_cursonodemicroservs',
        port: process.env.MYSQL_PORT || '3307',
    },
    mysqlService:{
        host: process.env.MYSQL_SVR_HOST || 'localhost',
        port: process.env.MYSQL_SVR_PORT || 3001,
    }

}