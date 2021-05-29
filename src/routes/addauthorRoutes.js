
const express = require('express');
const addauthorRouter = express.Router();

addauthorRouter.get('/',function(req,res){
    res.render("addauthor",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},
        {link:'/addauthor',name:'Add Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
         title:"Library",
         
    });   
});

module.exports = addauthorRouter;