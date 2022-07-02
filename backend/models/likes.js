const Sequelize = require( 'sequelize' );
const db = require( '../config/config' );
// Model posts
const Likes = db.define( 'likes', {

    userId: {
            type: Sequelize.INTEGER,
        },
    postId: {
            type: Sequelize.INTEGER,
        },
},
    {
        timestamps: false
    })
module.exports = Likes;
