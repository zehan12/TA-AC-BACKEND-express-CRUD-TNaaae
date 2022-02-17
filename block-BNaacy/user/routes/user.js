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

module.exports = router;