const models = require( "../models/index" );

// Création d'un posts //
exports.createPost = (req, res, next) => {
    console.log( 'body => ', req.body )
    models.Posts.create( {
        userId: req.body.userId,
        image: req.body.image,
        publication: req.body.publication
    } ).then( () => res.status( 201 ).json( {message: 'post créé !'} ) )
        .catch( error => res.status( 400 ).json( {error} ) )
};

// Afficher tous les posts //
exports.listPost = (req, res, next) => {
    models.Posts.findAll()
        .then( (Posts) => {
            res.status( 200 ).json( Posts );
        } )
        .catch( error => res.status( 400 ).json( {error} ) );

};

// Modifier un post //
exports.updatePost = (req, res, next) => {
    models.Posts.update(
        {image: req.body.image, publication: req.body.publication},
        {where: {id: req.body.id}
        }).then( () => res.status( 200 ).json( {message: 'Post modifiée !'} ) )
        .catch( error => res.status( 400 ).json( {error} ) );
};


// Supprimer un post //
exports.deletePost = (req, res) => {
    models.Posts.destroy({
        where: {id: req.body.id, userId: req.body.userId}} ).then( () => {
        res.status( 200 ).json( {message: 'post supprimé !'} );
    } )
        .catch( error => res.status( 400 ).json( {error} ) );
};
