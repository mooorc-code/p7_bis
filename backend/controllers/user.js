const models = require( '../models/index' );
const bcrypt = require( 'bcrypt' );
const jwt = require( 'jsonwebtoken' );

// création de profil //
exports.signup = (req, res, next) => {
    // console.log( 'body => ', req.body )
    bcrypt.hash( req.body.password, 10 )
        .then( hash => {
            models.Users.create( {
                email: req.body.email,
                nom: req.body.nom,
                prenom: req.body.prenom,
                poste: req.body.poste,
                password: hash,
                avatar: req.body.avatar
            } ).then( () => res.status( 201 ).json( {message: 'utilisateur créé !'} ) )
                .catch( () => res.status( 400 ).json( {message: 'utilisateur deja existant'} ) );
        } )
        .catch( error => res.status( 500 ).json( {error} ) );
};
// connexion au profil //
exports.login = (req, res, next) => {
    // console.log( 'body =>', req.body )
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
                        userId: user,
                        token: jwt.sign(
                            {user: user},
                            'RANDOM_SECRET_KEY',
                            {expiresIn: '24h'}
                        )
                    } );
                } )
                .catch( error => res.status( 500 ).json( {error} ) );
        } )
        .catch( error => res.status( 500 ).json( {error} ) );
};

exports.getUserInfos = (req, res, next) => {
    // console.log( 'body => ', req.body )
    models.Users.findOne( {
        where: { email: req.body.email}
    } ).then( (user) => res.status( 201 ).json( {data: user} ) )
        .catch( () => res.status( 400 ).json( {message: 'utilisateur deja existant'} ) )
};

