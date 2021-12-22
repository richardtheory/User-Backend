import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import Model from "./Schema/schema.js"

const app =express()
app.use(express.json())
app.use(cors())
dotenv.config()

const port=process.env.PORT || 8000
const url=process.env.DB_URL
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database connected successfully")
}).catch((error)=>{
    console.log(error)
})

app.get("/",()=>{
    res.send("My user API")
})

app.get("/user",async(req,res)=>{
    const info=await Model.find({})
    if(info){
        return res.status(200).json({
            message:"details accessed successful",
            data:info
        })
    }else{
        return res.status(400).json({
            message:"failed to access user details"
        })
    }
})

app.post("/add",async(req,res)=>{
    const {first_name,last_name,date_of_birth,school}=req.body
    const info=await Model.create({
        first_name,
        last_name,
        date_of_birth,
        school
    })
    if(info){
        return res.status(200).json({
            message:"user created successfully",
            data:info
        })
    }else{
        return res.status(400).json({
            message:"failed to add new user"
        })
    }
}
)

app.listen(port,()=>{
    console.log(`the server is running at ${port}`)
})