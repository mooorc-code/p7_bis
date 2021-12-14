const Sequelize = require( 'sequelize' );
const db = require( '../config/config' );
// Model comments
const Comments = db.define( 'comments', {
    user_id: {
        type: Sequelize.INTEGER,
    },
    post_id: {
        type: Sequelize.INTEGER,
    },
    comment: {
        type: Sequelize.STRING,
    },
}, {
    timestamps: false
} );

module.exports = Comments;
