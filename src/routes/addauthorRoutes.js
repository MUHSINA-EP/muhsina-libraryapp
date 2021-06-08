
const express = require('express');
const addauthorRouter = express.Router();
const Authordata = require('../model/authordata');


addauthorRouter.get('/',function(req,res){
    res.render("addauthor",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},
        {link:'/addauthor',name:'Add Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
         title:"Library",
         
    });   
});

addauthorRouter.post('/add',function(req,res){
    var item = {
        title: req.body.title,
        abtauthor: req.body.abtauthor, 
         image: req.body.image  
 
    } 
    var author = Authordata(item);
    author.save();
    res.redirect('/authors');
 });



module.exports = addauthorRouter;