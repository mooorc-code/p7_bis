const rateLimit = require( "express-rate-limit" );

const limiter = rateLimit( {
    windowMs: 60 * 60 * 1000, // 60 minutes
    max: 100 // maximum de 100 requêtes
} );

module.exports = limiter
