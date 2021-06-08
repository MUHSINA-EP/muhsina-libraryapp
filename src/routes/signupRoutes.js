const express = require('express');
const signupRouter = express.Router();
const Userdata =  require("../model/user");




signupRouter.get('/',function(req,res){
    res.render("signup",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},
        {link:'/addauthor',name:'Add Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
         title:"Library",
         
    });   
});


signupRouter.post('/add',function(req,res){
    var item = {
        email: req.body.email,
        use: req.body.use, 
       psw: req.body.psw,
       
 
    } 
    var user = Userdata(item);
   user.save();
    res.redirect('/login');
 });
      
    



          
        
        
module.exports = signupRouter;