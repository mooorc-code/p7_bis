const Users = require( './users' );
const Posts = require( './posts' );
const Comments = require( './comments' );

// const Likes = require('../models/likes');

Users.hasMany( Posts );
Users.hasMany( Comments );
// Users.hasMany(Likes);
Posts.hasMany( Comments );
// Posts.hasMany(Likes);
Posts.belongsTo( Users );
Comments.belongsTo( Users );
Comments.belongsTo( Posts );
// Likes.belongsTo(Users);
// Likes.belongsTo(Posts);

module.exports = {
    Users,
    Posts,
    Comments
    // Likes
};
