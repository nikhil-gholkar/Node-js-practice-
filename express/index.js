
const express= require("express")


const app=express();


app.get("/",(req,res)=>{
    res.send("my name is nikhil")
})

app.get("/about",(req,res)=>{
    res.send(`this is about page ${req.query.name}`)
})


app.listen(8000,()=>{console.log("server started at 8000")})