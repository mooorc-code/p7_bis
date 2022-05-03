const models = require( "../models/index" );
const jwt = require( 'jsonwebtoken' );

// Création d'un commentaire //
exports.createComment = (req, res, next) => {
    console.log( req.params )
    console.log( req.body )
    models.Comments.create( {
        userId: req.body.userId,
        postId: req.params.postId,
        comment: req.body.comment
    } ).then( () => res.status( 201 ).json( {message: 'commentaire créé !'} ) )
        .catch( error => res.status( 400 ).json( {error} ) )
};

// Afficher tous les commentaires d'un post //
exports.listComment = (req, res, next) => {
    console.log( req.params )
    models.Comments.findAll( {
        where: {postId: req.params.postId}
    } ).then( (Comments) => {
        res.status( 200 ).json( Comments );
    } )
        .catch( error => res.status( 400 ).json( {error} ) );
};

// Modifier un commentaire //
exports.updateComment = (req, res, next) => {
    models.Comments.update(
        {comment: req.body.comment},
        {
            where: {id: req.params.id}
        } ).then( () => res.status( 200 ).json( {message: 'Commentaire modifiée !'} ) )
        .catch( error => res.status( 400 ).json( {error} ) );
};

// supprimer un commentaire //
exports.deleteComment = (req, res) => {
    const token = req.headers.authorization.split( ' ' )[1];
    const decodedToken = jwt.verify( token, 'RANDOM_SECRET_KEY' );
    const user = decodedToken.user;
        models.Comments.destroy( {
            where: {id: req.params.id, userId: user.id}
        } ).then( () => {
            res.status( 200 ).json( {message: 'Commentaire supprimé !'} );
        } )
            .catch( error => res.status( 400 ).json( {error} ) );

};
