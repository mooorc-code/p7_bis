const models = require( "../models/index" );
const jwt = require( "jsonwebtoken" );
const Posts = require( "../models/posts" );
const Comments = require( "../models/comments" );


// Création d'un posts //
exports.createPost = (req, res, next) => {

    console.log( `${req.protocol}://${req.get( 'host' )}/images/${req.file.filename}` );

    models.Posts.create( {
        userId: req.body.userId,
        image: `${req.protocol}://${req.get( 'host' )}/images/${req.file.filename}`,
        publication: req.body.publication,
    } ).then( () => res.status( 201 ).json( {message: 'post créé !'} ) )
        .catch( error => res.status( 400 ).json( {error} )
        )
};

// Afficher tous les posts //
exports.listPost = (req, res, next) => {
    models.Posts.findAll({include: [models.Comments], order: [
        ['id', 'desc']
        ]})
        .then( (Posts) => {
            res.status( 200 ).json( Posts );
        } )
        .catch( error => res.status( 400 ).json( {error} ) );

};


// Modifier un post //
exports.updatePost = (req, res, next) => {
    models.Posts.update(
        {image: req.body.image, publication: req.body.publication},
        {
            where: {id: req.body.id}
        } ).then( () => res.status( 200 ).json( {message: 'Post modifiée !'} ) )
        .catch( error => res.status( 400 ).json( {error} ) );
};


// Supprimer un post //
exports.deletePost = (req, res) => {
    const token = req.headers.authorization.split( ' ' )[1];
    const decodedToken = jwt.verify( token, 'RANDOM_SECRET_KEY' );
    const user = decodedToken.user;

    models.Comments.destroy({where: {postId:req.params.id} }).then(() => {
        models.Posts.destroy( {
            where: {id: req.params.id, userId: user.id}
        } ).then( () => {
            res.status( 200 ).json( {message: 'post supprimé !'} );
        } )
            .catch( error => res.status( 400 ).json( {error} ) );
    })
        .catch( error => res.status( 400 ).json( {error} ) );;
};
