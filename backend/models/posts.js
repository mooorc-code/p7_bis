const Sequelize = require( 'sequelize' );
const db = require( '../config/config' );
// Model posts
const Posts = db.define( 'posts', {
    userId: {
        type: Sequelize.INTEGER,
    },
    publication: {
        type: Sequelize.STRING,
    },
    image: {
        type: Sequelize.STRING,
    },

}, {
    timestamps: false
} );

module.exports = Posts;
