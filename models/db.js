const Sequelize = require('sequelize');

// -- Conexão com banco de dados Mysql--//
const sequelize = new Sequelize('appMensagem', 'root', 'ca1234', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
} 