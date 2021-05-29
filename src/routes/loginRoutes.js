const express = require('express');
const loginRouter = express.Router();

loginRouter.get('/',function(req,res){
    res.render("login",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},
        {link:'/addauthor',name:'Add Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
         title:"Library",
          
    });   
});

module.exports = loginRouter;
