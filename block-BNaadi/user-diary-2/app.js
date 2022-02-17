var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var path = require('path');
var indexRoute = require('./routes/index');
var userRoute

mongoose.connect( "mongodb://localhost/user-diary-2", (err)=>{
    console.log( err ? err : "connected: true" );
} );

var app = express();

app.use( logger( 'dev' ) );

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( __dirname, "views" ) );

app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );

app.use( '/', indexRoute );
app.use( '/users', userRoute );

app.use( (err, req, res, next )=>{
    next(err);
});

app.listen( 3000, ()=>{
    console.log( "server listening on port 3k" );
} );