const Sequelize = require('sequelize');
const db = require('../config/config');
// Model users
const Users = db.define('users', {
    email: {
        type: Sequelize.STRING,
    },
    nom: {
        type: Sequelize.STRING,
    },
    prenom: {
        type: Sequelize.STRING,
    },
    poste: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
    avatar: {
        type: Sequelize.STRING,
    },
    admin: {
        type: Sequelize.STRING,
    },
}, {
    timestamps: false
});

module.exports = Users;
