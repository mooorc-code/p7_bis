const models = require( '../models/index' );
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize');


exports.signup = (req, res, next) => {
    bcrypt.hash( req.body.password, 10 )
        .then( hash => {
            models.Users.create({
                email: req.body.email,
                password: hash,
            }).then( () => res.status( 201 ).json( {message: 'utilisateur créé !'} ) )
                .catch( error => res.status( 400 ).json( {error} ) );
        } )

        .catch( error => res.status( 500 ).json( {error} ) );
};
