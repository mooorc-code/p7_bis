const express = require('express');
const db = require( './config/config' );
const Sequelize = require('sequelize');
const bodyParser = require( 'body-parser' );
const userRoutes = require('./routes/user');
const helmet = require( "helmet" );


//Database

//Test connexion DB
db.authenticate()
    .then( () => console.log( 'Database connected' ) )
    .catch( err => console.log( 'Error: ' + err ) )

const app = express();

app.use( (req, res, next) => {
    res.setHeader( 'Access-Control-Allow-Origin', '*' );
    res.setHeader( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization' );
    res.setHeader( 'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS' );
    next();
} );
app.use( helmet() );
app.use( bodyParser.json() );
app.use('/api/auth', userRoutes);

module.exports = app;
