const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library',{useNewUrlParser:true});


const Schema = mongoose.Schema;

const UserSchema = new Schema({
           
          email: String,
           use: String,
           psw: String, 
});


var Userdata = mongoose.model('Userdata',UserSchema);

module.exports = Userdata;