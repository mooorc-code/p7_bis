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

exports.getUserInfosById = (req, res, next) => {
    // console.log( 'body => ', req.body )
    models.Users.findOne( {
        where: { email: req.body.email}
    } ).then( (user) => res.status( 201 ).json( {data: user} ) )
        .catch( () => res.status( 400 ).json( {message: 'utilisateur deja existant'} ) )
};

exports.updateUser = (req, res, next) => {
    if (req.body.password) {
        bcrypt.hash( req.body.password, 10 )
            .then( hash => {
                models.Users.update( {
                    email: req.body.email,
                    poste: req.body.poste,
                    password: hash,
                    avatar: req.body.avatar
                }, {
                    where: {id: req.params.id}
                } ).then( () => res.status( 201 ).json( {message: 'utilisateur modifiée !'} ) )
                    .catch( () => res.status( 400 ).json( {message: 'utilisateur deja existant'} ) );
            } )
            .catch( error => res.status( 500 ).json( {error} ) );
    } else {
        models.Users.update(
            {avatar: req.body.avatar, poste: req.body.poste, email: req.body.email},
            {
                where: {id: req.params.id}
            } ).then( () => res.status( 200 ).json( {message: 'utilisateur modifiée !'} ) )
            .catch( error => res.status( 400 ).json( {error} ) );
    }
};
exports.deleteUser = (req, res) => {

    const token = req.headers.authorization.split( ' ' )[1];
    const decodedToken = jwt.verify( token, 'RANDOM_SECRET_KEY' );
    const user = decodedToken.user;

    models.Comments.destroy({where: {userId:user.id} }).then(() => {
        models.Posts.destroy( {
            where: {userId: user.id}
        } ).then( () => {
            models.Users.destroy( {
                where: {id: user.id},
            } ).then( () => {
                res.status( 200 ).json( {message: 'utilisateur supprimé !'} );
            } )
                .catch( error => res.status( 400 ).json( {error} ) );
        } )
            .catch( error => res.status( 400 ).json( {error} ) );
    })
        .catch( error => res.status( 400 ).json( {error} ) );;

};

