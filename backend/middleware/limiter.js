const rateLimit = require( "express-rate-limit" );

const limiter = rateLimit( {
    windowMs: 15 * 60 * 1000, // 15 minute
    max: 5 // maximum de 10 requêtes
} );

module.exports = limiter
