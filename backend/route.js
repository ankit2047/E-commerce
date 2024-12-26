const express=require("express");
const router=express.Router();
const Product=require("./models/product");
const UserRegister=require("./models/userRegister");
const bcrypt=require("bcryptjs");
const Contact = require("./models/contact");



//Post API for product
router.post("/product",async(req, res)=>{

    const {name,price,description}=req.body;
    try {
        const data=new Product({name,price,description});
        const saved=await data.save();
        if (saved) {
            res.status(201).json({message:"Data post successfully"});
            console.log(data);
        } else {
            res.status(400).json({error:"Data not post"});
        }
        
    } catch (error) {
        res.status(500).json({error:"Server error occur!!"});
        console.log(error);
    }

});

//get api for product

router.get("/getAllProduct",async(req,res)=>{
    try {
        const data=await Product.find();
        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json({error:"Server error"});
        console.log(error)
    }
})

//get product data ById from database
router.get("/findProductById/:id", async(req,res)=>{
    try {
        const data=await Product.findById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error:"Server error occurs!!"});
        console.log(error);
    }
})

// Product delete by Id from data base
router.delete('/deleteById/:id',async(req,res)=>{
    try {
        const data=await Product.findByIdAndDelete(req.params.id);
        if (data) {
            res.status(201).json({message:"Product deleted Successfully!!", data}) 
        } else {
          res.status(400).json({error:"Product not deleted"});  
        }
       
    } catch (error) {
        res.status(500).json({error:"Server error occurs!!"});
        console.log(error); 
    }
})

//Product update byId 
router.patch("/updateProductById/:id",async(req,res)=>{
    try {
        const data=await Product.findByIdAndUpdate(req.params.id,req.body);
        if (data) {
            res.status(202).json({message:"Product update successfully"});
        } else {
           res.status(401).json({error:"Product can not update"}) 
        }
    } catch (error) {
        res.status(500).json({error:"Server error occurs!!"});
        console.log(error);
    }
})

//post contactUs Api
router.post("/contactUs",async(req,res)=>{
    const {name,email,message}=req.body;
    try {
        const data=new Contact({name,email,message});
        const saved=await data.save();
        if (saved) {
            res.status(201).json({message:"Contact form Submitted"});
            console.log(data);
        } else {
           res.status(400).json({error:"Form not Submitted"});
        }
    } catch (error) {
        res.status(500).json({error:"Server error occurs"});
        console.log(error);
    }
})

//Post Api for userRegister
router.post("/userRegistration",async(req, res)=>{

    const {name,email,phone,password}=req.body;
    try {
        const data=new UserRegister({name,email,phone,password});
        const saved=await data.save();
        if (saved) {
            res.status(201).json({message:"UserData post successfully"});
            console.log(data);
        } else {
            res.status(400).json({error:"UserData not post"});
        }
        
    } catch (error) {
        res.status(500).json({error:"Server error occur!!"});
        console.log(error);
    }

});


//UserLogin Api
router.post("/login", async(req,res)=>{
    try {
       const{email,password}=req.body;
       if (!email || !password) {
           res.status(400).json({error:"please fill all the fields"})
       } else {
           const userexist=await UserRegister.findOne({email:email})
           if (!userexist) {
               res.status(401).json({error:"invalid crediential"})
           } else {
             const ismatch=await bcrypt.compare(password,userexist.password) 
             if (ismatch) {
               const token=await userexist.generateAuthToken();
               res.status(201).json({message:"User Login Successfully",token})
             } else {
               res.status(401).json({error:"invalid crediential"})
             } 
           }
       }
    } catch (error) {
       res.status(500).json({error:"Server error occurs!!"});
           console.log(error);
    }
   })


module.exports=router