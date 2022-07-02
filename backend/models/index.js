const Users = require( './users' );
const Posts = require( './posts' );
const Comments = require( './comments' );
const Likes = require('../models/likes');

Users.hasMany( Posts );
Users.hasMany( Comments );
Users.hasMany(Likes);
Posts.hasMany( Comments, {
    onDelete: 'CASCADE', hooks:true
} );
Posts.hasMany(Likes);
Posts.belongsTo( Users );

Comments.belongsTo( Users );
Comments.belongsTo( Posts );
Likes.belongsTo(Users);
Likes.belongsTo(Posts,{through: 'postId' });

module.exports = {
    Users,
    Posts,
    Comments,
    Likes
};
