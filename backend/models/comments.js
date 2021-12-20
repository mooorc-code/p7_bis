const Sequelize = require( 'sequelize' );
const db = require( '../config/config' );
// Model comments
const Comments = db.define( 'comments', {
    userId: {
        type: Sequelize.INTEGER,
    },
    postId: {
        type: Sequelize.INTEGER,
    },
    comment: {
        type: Sequelize.STRING,
    },
}, {
    timestamps: false
} );

module.exports = Comments;
