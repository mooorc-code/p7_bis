const models = require( "../models/index" );

// Création d'un commentaire //
exports.createComment = (req, res, next) => {
    models.Comments.create( {
        user_id: req.body.user_id,
        post_id: req.body.post_id,
        comment: req.body.comment
    } ).then( () => res.status( 201 ).json( {message: 'commentaire créé !'} ) )
        .catch( error => res.status( 400 ).json( {error} ) )
};

// Afficher tous les commentaires d'un post //
exports.listComment = (req, res, next) => {
    models.Comments.findAll( {
        where: {post_id: req.body.post_id}
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
            where: {id: req.body.id, post_id: req.body.post_id}
        } ).then( () => res.status( 200 ).json( {message: 'Commentaire modifiée !'} ) )
        .catch( error => res.status( 400 ).json( {error} ) );
};

// supprimer un commentaire //
exports.deleteComment = (req, res) => {
    models.Comments.destroy( {
        where: {id: req.body.id}
    } ).then( () => {
        res.status( 200 ).json( {message: 'Commentaire supprimé !'} );
    } )
        .catch( error => res.status( 400 ).json( {error} ) );
};
