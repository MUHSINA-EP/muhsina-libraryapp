const express = require('express');
const port = process.env.PORT || 2000;


const bodyParser            =  require("body-parser");
const app = new express();
const booksRouter=require('./src/routes/booksRoutes');
const authorsRouter=require('./src/routes/authorsRoutes');
const loginRouter=require('./src/routes/loginRoutes');
const signupRouter=require('./src/routes/signupRoutes');
const addbookRouter=require('./src/routes/addbookRoutes');
const addauthorRouter=require('./src/routes/addauthorRoutes');




app.use(bodyParser.urlencoded(
    { extended:true }
))

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);









app.get('/',function(req,res){
    res.render("index",
    {
         nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},
         {link:'/addauthor',name:'Add Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
         title:"Library" 
          
    });   
});



app.listen(port,()=>{console.log("Server Ready at" + port)});

