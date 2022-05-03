const jwt = require( 'jsonwebtoken' );

module.exports = (req, res, next) => {
    try {
        console.log(req.headers)
        const token = req.headers.authorization.split( ' ' )[1];
        const decodedToken = jwt.verify( token, 'RANDOM_SECRET_KEY' );
        const user = decodedToken.user;
        console.log(user.id);
        if ((req.body.userId && req.body.userId !== user.id) || req.body.admin === 1 ) {
            console.log(req.body.userId);
            res.status( 401 ).json( {
                error: new Error( 'Invalid request !' )
            } );
        } else {
            next();
        }
    } catch (error) {
        console.log( error );
        res.status( 500 ).json( {
            error: new Error( error )
        } );
    }
};
