
const express= require("express");
const data=  require("./data.json")
const fs= require("fs")

const app= express();


app.use((req,res,next)=>{
    req.myname="nikhil"
    console.log(req)
    next()
})

app.use((req,res,next)=>{
    fs.appendFile("./log.txt",`\n ${Date.now()} ${req.method} ${req.url}`,(data,err)=>{
        next()
    })
   
})

app.get("/api/users",(req,res)=>{
    console.log(req.myname)
    return res.json(data)
})

app.listen(8000,()=>{
    console.log("port started at 8000")
})
