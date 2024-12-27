const mongoose=require("mongoose");
const DB=process.env.DATABASE;


mongoose.connect(DB).then(()=>{
    console.log("Database Connect Successfully");
}).catch((error)=>{
    console.log("Database not connected",error);
})