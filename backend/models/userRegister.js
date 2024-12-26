const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
});

userSchema.pre("save",async function (next) {
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,10);
    }
    next();
});

userSchema.methods.generateAuthToken=async function(){
    try {
        const data={
            email:this.email,
            password:this.password
        }
        const key="Ankitkumargupta"
      let token= jwt.sign(data,key);
      this.tokens=this.tokens.concat({token:token});
      await this.save();
      return token;
    } catch (error) {
       console.log("error",error) 
    }
}

const UserRegister=mongoose.model("UserRegister",userSchema);
module.exports=UserRegister;