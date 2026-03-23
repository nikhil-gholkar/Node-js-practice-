

const http= require("http")

const fs= require('fs')


const myserver= http.createServer((req,res)=>{
     let log=""

    switch(req.url){
        case "/about":
            res.end("my name is nikhil")
            log= `${Date.now()} about page requested`
            break
        case "/contact":
            res.end("999999999")
            log= `${Date.now()} contact page requested`
            break
        default:
            res.end("error 404 not found")
            log= `${Date.now()} page not found`
    }
    
  fs.appendFile("log.txt",log,(err)=>{})
    
    
})

myserver.listen(8000,()=>console.log("server started at 8000"))