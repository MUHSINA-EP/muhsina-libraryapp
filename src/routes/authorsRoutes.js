const express = require('express');
const Authordata = require('../model/authordata');

const authorsRouter = express.Router();

var authors = [
    {
        title:'K R Meera',
        nationality:'Indian author',
        img:"krmeera.jpg"
    },
    {
        title:'J K Rowling',
        nationality:'British author',
        img:"jkrowling.jpg"
    },
    {
        title:'William Shakespeare',
        nationality:'English Playwriter',
        img:"ws.jpg"
    },
    {
        title:'Vaikkam Mohd Basheer',
        nationality:'Indian Author',
        img:"basheer.jpg"
    },

{
        title:'Chetan Bhagath',
        nationality:'Indian Author',
        img:"chetan.jpg"
    },

]


authorsRouter.get('/',function(req,res){
    Authordata.find()
    .then(function(authors){

    res.render("authors",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},
        {link:'/addauthor',name:'Add Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
         title:"Library",
         authors  
    });  
});
});

authorsRouter.get('/:id',function(req,res){
    const id = req.params.id;
    Authordata.findOne({_id:id})
    .then(function(author){

              res.render("author",
             {
                nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},
               {link:'/addauthor',name:'Add Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
                title:"Library",
                author
         });
})
});

module.exports = authorsRouter;

