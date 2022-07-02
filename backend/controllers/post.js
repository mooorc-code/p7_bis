const models = require( "../models/index" );
const jwt = require( "jsonwebtoken" );
const Posts = require( "../models/posts" );
const Comments = require( "../models/comments" );
const getUserFromJwt = require("../helpers/getUserFromJwt")
const Sequelize = require('sequelize');


// Création d'un posts //

exports.createPost = (req, res, next) => {
    const user = getUserFromJwt(req.headers.authorization);
    models.Posts.create( {
        userId: user,
        image: `${req.protocol}://${req.get( 'host' )}/images/${req.file.filename}`,
        publication: req.body.publication,
    } ).then( () => res.status( 201 ).json( {message: 'post créé !'} ) )
        .catch( error => res.status( 400 ).json( {error} )
        )
};

// Afficher tous les posts //
exports.listPost = (req, res, next) => {
    const user = getUserFromJwt(req.headers.authorization);
    models.Posts.findAll({
        include: [models.Comments, models.Likes,models.Users ],
        order: [
            ['id', 'desc']
        ]})
        .then( (Posts) => {
            let mapPost = Posts.map(post => {
               let plainPost = post.get({
                    plain: true
                })

                let likes = post.likes.filter(like => {
                    return like.userId === user
                })
                return {
                    myLikes : likes,
                    ...plainPost
                }
            })
            res.status( 200 ).json( mapPost );
        } )
        .catch( error => res.status( 400 ).json( {error} ) );

};


// Modifier un post //
exports.updatePost = (req, res, next) => {
    console.log(req.body)
    const user = getUserFromJwt(req.headers.authorization);
    models.Posts.update(
        {image: `${req.protocol}://${req.get( 'host' )}/images/${req.file.filename}`, publication: req.body.publication},
        {
            where: {id: req.body.id, userId: user}
        } ).then( () => res.status( 200 ).json( {message: 'Post modifiée !'} ) )
        .catch( error => res.status( 400 ).json( {error} ) );
};


// Supprimer un post //
exports.deletePost = (req, res) => {

    models.Comments.destroy({where: {postId:req.params.id} }).then(() => {
        const user = getUserFromJwt(req.headers.authorization);
        models.Posts.destroy( {
            where: {id: req.params.id, userId: user}
        } ).then( () => {
            res.status( 200 ).json( {message: 'post supprimé !'} );
        } )
            .catch( error => res.status( 400 ).json( {error} ) );
    })
        .catch( error => res.status( 400 ).json( {error} ) );
};
