const models = require( '../models/index' );
const bcrypt = require( 'bcrypt' );
const jwt = require( 'jsonwebtoken' );
const getUserFromJwt = require( "../helpers/getUserFromJwt" )
const {Users} = require( "../models" );

// création de profil //
exports.signup = (req, res, next) => {
    bcrypt.hash( req.body.password, 10 )
        .then( hash => {
            models.Users.create( {
                email: req.body.email,
                nom: req.body.nom,
                prenom: req.body.prenom,
                poste: req.body.poste,
                password: hash,
                avatar: `${req.protocol}://${req.get( 'host' )}/images/${req.file.filename}`
            } ).then( () => res.status( 201 ).json( {message: 'utilisateur créé !'} ) )
                .catch( () => res.status( 400 ).json( {message: 'utilisateur deja existant'} ) );
        } )
        .catch( error => res.status( 500 ).json( {error} ) );
};
// connexion au profil //
exports.login = (req, res, next) => {
    models.Users.findOne( {where: {email: req.body.email}} )
        .then( user => {
            if (!user) {
                return res.status( 401 ).json( {error: 'utilisateur non trouvé !'} );
            }
            bcrypt.compare( req.body.password, user.password )
                .then( valid => {
                    if (!valid) {
                        return res.status( 401 ).json( {error: 'mot de passe incorrect !'} );
                    }
                    res.status( 200 ).json( {
                        token: jwt.sign(
                            {user: user.id},
                            'RANDOM_SECRET_KEY',
                            {expiresIn: '24h'}
                        )
                    } );
                } )
                .catch( error => res.status( 500 ).json( {error} ) );
        } )
        .catch( error => res.status( 500 ).json( {error} ) );
};

exports.getUserInfosById = (req, res, next) => {
    const user = getUserFromJwt( req.headers.authorization );
    models.Users.findByPk( user
    ).then( (user) => {
        let userMap = user.get( {plain: true} )
        delete userMap.password
        res.status( 200 ).json( userMap )
    } )

        .catch( () => res.status( 400 ).json( {message: 'error'} ) )

};

exports.updateUser = (req, res, next) => {
    const user = getUserFromJwt( req.headers.authorization );

    if (req.body.password) {
        bcrypt.hash( req.body.password, 10 )
            .then( hash => {
                models.Users.update( {
                    email: req.body.email,
                    poste: req.body.poste,
                    password: hash,
                    avatar: `${req.protocol}://${req.get( 'host' )}/images/${req.file.filename}`
                }, {
                    where: {id: user}
                } ).then( () => res.status( 201 ).json( {message: 'utilisateur modifiée !'} ) )
                    .catch( () => res.status( 400 ).json( {message: 'utilisateur deja existant'} ) );
            } )
            .catch( error => res.status( 500 ).json( {error} ) );
    } else {
        models.Users.update(
            {
                avatar: `${req.protocol}://${req.get( 'host' )}/images/${req.file.filename}`,
                poste: req.body.poste, email: req.body.email
            },
            {where: {id: user}}
        ).then( () => res.status( 200 ).json( {message: 'utilisateur modifiée !'} ) )
            .catch( error => res.status( 400 ).json( {error} ) );
    }
};
exports.updatePW = (req, res, next) => {
    const user = getUserFromJwt( req.headers.authorization );


    if (req.body.password) {
        bcrypt.hash( req.body.password, 10 )
            .then( hash => {
                models.Users.update( {
                    password: hash,
                }, {
                    where: {id: user}
                } ).then( () => res.status( 201 ).json( {message: 'mot de passe modifiée !'} ) )
                    .catch( () => res.status( 400 ).json( {message: 'mot de passe deja existant'} ) );
            } )
            .catch( error => res.status( 500 ).json( {error} ) );
    }
};
exports.deleteUser = (req, res) => {
    const user = getUserFromJwt( req.headers.authorization );
    models.Comments.destroy( {where: {userId: req.params.id}} )
        .then( () => {
            models.Posts.destroy( {
                where: {userId: user }
            } ).then( () => {
                models.Users.destroy( {
                    where: {id: user}
                } ).then( () => {
                    res.status( 200 ).json( {message: 'utilisateur supprimé !'} );
                } )

                    .catch( error => res.status( 400 ).json( {error} ) );
            } )
                .catch( error => res.status( 400 ).json( {error} ) );
        } )
        .catch( error => res.status( 400 ).json( {error} ) );


};

