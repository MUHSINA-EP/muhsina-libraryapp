const express = require('express');
const Userdata = require('../model/user');
const loginRouter = express.Router();





loginRouter.post('/login',function(req,res){
    var item ={
   
        email: req.body.email,
        use: req.body.use, 
        psw: req.body.psw
    }
    var book = Bookdata(item);
   book.save();

    


});
 loginRouter.get('/',function(req,res){
     res.render("login",
 {
     nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},
     {link:'/addauthor',name:'Add Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
      title:"Library",
       
 });
 
    Userdata.findOne({username:username},functionerr,foundUser);{
          if(err){
              console.log(err);
           }else{
               if(foundUser){
                   if(foundUser.psw === psw){
                       res.redirect('/index');
            }
               }
           }
      }
   });


 
 
   module.exports = loginRouter;
