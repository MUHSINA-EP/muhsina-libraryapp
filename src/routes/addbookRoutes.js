const express = require('express');
const multer = require('multer');

const addbookRouter = express.Router();
const Bookdata = require('../model/bookdata');

const fileStorageEngine = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'./public/images')
    },
    filename:(req,file,cb) =>{
        cb(null,file.originalname)
    }
});


const upload = multer({storage:fileStorageEngine});

addbookRouter.get('/',function(req,res){
    res.render("addbook",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},
        {link:'/addauthor',name:'Add Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
         title:"Library",
         
    });   
});

addbookRouter.post('/add',upload.single("img"),function(req,res){
   var item = {
       title: req.body.title,
       author: req.body.author, 
      genre: req.body.genre,
      image: req.body.image  

   } 
   var book = Bookdata(item);
   book.save();
   res.redirect('/books');
});




module.exports = addbookRouter;