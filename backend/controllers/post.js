const models = require( "../models/index" );

// Création d'un posts //
exports.createPost = (req, res, next) => {
    console.log( 'body => ', req.body )
    models.Posts.create( {
        user_id: req.body.user_id,
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
//
//     if (req.body.admin === 1) {
//         models.Posts.update( {image: req.body.image, publication: req.body.publication},
//             {where: {id: req.body.id}} ).then( () => {
//             res.status( 200 ).json( {message: "update with succes (admin) !"} );
//         } )
//             .catch( (error) => {
//                 res.status( 500 ).json( {error} );
//             } );
//     }
//     if (Posts.user_id === req.body.userId) {
//         console.log(Posts.user_id);
//         models.Posts.update( {image: req.body.image, publication: req.body.publication},
//             {where: {id: req.body.id, user_id: req.body.user_id}} ).then( () => {
//             res.status( 200 ).json( {message: "update with succes !"} );
//         } )
//             .catch( (error) => {
//                 res.status( 500 ).json( {error} );
//             } );
//     } else {
//         res.status( 500 ).json( {message: "accès refusé!"} );
//     }
// };


// Supprimer un post //
exports.deletePost = (req, res) => {
    models.Posts.destroy({
        where: {id: req.body.id, user_id: req.body.user_id}} ).then( () => {
        res.status( 200 ).json( {message: 'post supprimé !'} );
    } )
        .catch( error => res.status( 400 ).json( {error} ) );
};
