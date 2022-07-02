const models = require('../models/index');
const getUserFromJwt = require( "../helpers/getUserFromJwt" );

exports.likePost = (req, res, next) => {
    const user = getUserFromJwt(req.headers.authorization);
    models.Likes.create({
        userId: user,
        postId: req.params.id
    })
        .then(() => res.status(201).json({ message: 'like ajouté !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.dislikePost = (req, res, ) => {
    const user = getUserFromJwt(req.headers.authorization);
    models.Likes.destroy({
        where: {postId: req.params.postId, userId: user}
    } )
        .then(() => res.status(201).json({ message: 'like supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};
