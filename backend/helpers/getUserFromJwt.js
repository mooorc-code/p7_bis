const jwt = require( 'jsonwebtoken' );

let getUserFromJwt = (authorization)=> {
    const token = authorization.split( ' ' )[1];
    const decodedToken = jwt.verify( token, 'RANDOM_SECRET_KEY' );
    return decodedToken.user
}

module.exports = getUserFromJwt;
