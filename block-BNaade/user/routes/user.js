var express = require('express');

var router = express();
var User = require('../models/user')

router.get( '/new', ( req, res )=>{
    res.render("form")
} );

router.post( '/', ( req, res )=>{
    console.log(req.body);
    User.create( req.body, (err,data)=>{
        // res.send(er
        if (err) return res.redirect('/users/new');
        if (data) return res.redirect('/');
    });
} );

router.get( '/', ( req, res, next ) => {
    User.find( {}, ( err, user ) =>{
        if ( err ) return next( err );
        res.render( 'allUsers', { user: user } );
    } )
} );

router.get( '/:id', ( req, res )=>{
    var id = req.params.id;
    console.log(id)
    User.findById( id, ( err, user )=>{
        if ( err ) return res.send("User Not Found");
        res.render( 'singleUser', { user } );
    } )
} )

router.get( '/:id/edit', ( req, res, next )=>{
    var id = req.params.id;
    console.log(id)
    User.findById( id, ( err, user )=>{
        if ( err ) return next(err)
        console.log(user)
        res.render( 'editUserForm.ejs', { user: user } );
    } )
} );

router.post( '/:id', ( req, res )=>{
    var id = req.params.id;
    console.log(id)
    User.findByIdAndUpdate( id, req.body, ( err, updated )=>{
        if ( err ) res.send("user not found");
        res.redirect('/users/' + id)
    } )
} )



module.exports = router;