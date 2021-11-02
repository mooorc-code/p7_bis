const Sequelize = require('sequelize');


module.exports = new Sequelize("groupomania", "student", "root", {
host: "localhost",
dialect: 'mysql',

} );
