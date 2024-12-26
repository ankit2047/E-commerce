const  express=require("express");
const cors=require("cors")
require('dotenv').config();
require("./db");


const app=express();
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT', 'PATCH'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    credentials: true // Enable credentials
}));

app.use(express.json());
app.use(require('./route'))


const PORT=process.env.PORT || 5001

app.listen(PORT,()=>{
    console.log(`Server is running on port N0 ${PORT} `);
})
