var express = require('express');
var router = express();
var User = require('../models/user');

router.get( '/new', ( req, res )=>{
    res.render( "userForm" )
} )

router.post( '/', ( req, res )=>{
    console.log(req.body);
    User.create( req.body, ( err, data )=>{
        if ( err ) return res.send(err);
        res.render('/users')
    } )
} );

router.get( '/', ( req, res )=>{
    User.find( {}, ( err, bodies )=>{
        if (err) return res.send(err);
        res.render('listUsers',{bodies:bodies});
    } )
} );


router.get('/:id', ( req, res )=>{
    var id = req.params.id;
    User.findById( id, ( err, body )=>{
        if (err) return res.send(err);
        res.render( 'singleUser', {body:body} );
    } )
})

router.put( '/:id', ( req, res )=>{
    var id = req.params.id;
    User.findByIdAndUpdate( id, req.body, ( err, body )=>{
        if ( err ) return res.send(err);
        res.redirect('/users/'+id);
    } )
} )

router.delete( '/:id', ( req,res )=>{
    var id = req.params.id;
    User.findByAndDelete( id, ( err,data )=>{
        if ( err ) return res.send(err);
        res.redirect('/users')
    } )
} )

module.exports = router;