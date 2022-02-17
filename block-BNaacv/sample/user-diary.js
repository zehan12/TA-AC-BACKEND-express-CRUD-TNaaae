var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var logger = require("morgan");
var userRoutes = require("./routes/users");


var app = express();

app.use( logger("dev") );

mongoose.connect( "mongodb://localhost/sample", (err)=>{
    console.log( err ? `not connected because:${err}` : "connected to database: true" );
} );

app.set( "view engine", "ejs" );
app.set( "views", path.join( __dirname, "views" ) );

app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );


app.use( "/users", userRoutes );

// app.get( "/users/new", ( req, res )=>{
//     res.render( "userForm" );
// } );

// app.get( "/users/:id", ( req, res, next )=>{
//     var id = req.params.id;
//     var name = { name: id };
//     res.render( "singleUser", {name: name} );
// } )

// app.get( "/users", ( req, res )=>{

//     res.render( "users" );
// } )


app.use(( req, res, next )=>{
    res.status(404).send("Page Not Found");
})

app.listen( 3000, ()=>{
    console.log("server is listening on port 3k");
} );

