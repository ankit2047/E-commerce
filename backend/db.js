const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/shiwansh1").then(()=>{
    console.log("Database Connect Successfully");
}).catch((error)=>{
    console.log("Database not connected",error);
})