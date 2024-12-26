const mongoose=require("mongoose");

const contactSchem=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const Contact=mongoose.model("Contact",contactSchem);
module.exports=Contact;