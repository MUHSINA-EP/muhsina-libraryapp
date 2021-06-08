const express = require('express');
const Bookdata = require('../model/bookdata');
const booksRouter = express.Router();

var books = [
    {
        title:'Tom and Jerry',
        author:'Joseph Barbera',
        genre:'cartoon',
        img:"tom.jpg"
    },
    {
        title:'Harry Potter',
        author:'J K Rowling',
        genre:'Fiction',
        img:"harry.jpg"
    },
    {
        title:'Paathummayude Aadu',
        author:'Basheer',
        genre:'Drama',
        img:"aadu.jpg"
    },
    {
        title:'Aarachar',
        author:'K R Meera',
        genre:'Novel',
        img:"arachar.jpg"
    },
    {
        title:'Gullivers travell',
        author:'Jonathan swift',
        genre:'Drama',
        img:"gulliver.jpg"
    },



]


booksRouter.get('/',function(req,res){
    Bookdata.find()
    .then(function(books){
    res.render("books",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},
        {link:'/addauthor',name:'Add Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
         title:"Library",
         books  
    });
});   
});

booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.render("book",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},
        {link:'/addauthor',name:'Add Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
         title:"Library",
         book


    });
    
})
});

module.exports = booksRouter;

