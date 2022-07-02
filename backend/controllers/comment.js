const models = require( "../models/index" );
const jwt = require( 'jsonwebtoken' );
const getUserFromJwt = require( "../helpers/getUserFromJwt" );

// Création d'un commentaire //
exports.createComment = (req, res, next) => {
    const user = getUserFromJwt( req.headers.authorization );
    models.Comments.create( {
        userId: user,
        postId: req.params.postId,
        comment: req.body.comment
    } ).then( () => res.status( 201 ).json( {message: 'commentaire créé !'} ) )
        .catch( error => res.status( 400 ).json( {error} ) )
};

// Afficher tous les commentaires d'un post //
exports.listComment = (req, res, next) => {

    models.Comments.findAll( {
        where: {postId: req.params.postId}
    } ).then( (Comments) => {
        res.status( 200 ).json( Comments );
    } )
        .catch( error => res.status( 400 ).json( {error} ) );
};

// Modifier un commentaire //
exports.updateComment = (req, res, next) => {
    const user = getUserFromJwt( req.headers.authorization );
    models.Comments.update(
        {comment: req.body.comment},
        {
            where: {id: req.params.id}
        } ).then( () => res.status( 200 ).json( {message: 'Commentaire modifiée !'} ) )
        .catch( error => res.status( 400 ).json( {error} ) );
};

// supprimer un commentaire //
exports.deleteComment = (req, res) => {
    const user = getUserFromJwt( req.headers.authorization );
    models.Comments.destroy( {
        where: {id: req.params.id, userId: user}
    } ).then( () => {
        res.status( 200 ).json( {message: 'Commentaire supprimé !'} );
    } )
        .catch( error => res.status( 400 ).json( {error} ) );

};
