const Sequelize = require( 'sequelize' );
const db = require( '../config/config' );
// Model posts
const Posts = db.define( 'posts', {
    user_id: {
        type: Sequelize.INTEGER,
    },
    publication: {
        type: Sequelize.STRING,
    },
    image: {
        type: Sequelize.BLOB,
    },
}, {
    timestamps: false
} );

module.exports = Posts;
