
const fs= require('fs')

fs.writeFileSync("test.txt","hello there")

const result=fs.readFileSync("test.txt","utf-8")
console.log(result)

fs.writeFile("test2.txt","hello there 2",(err)=>{
 if(err) console.log(err)
})

fs.appendFile("test2.txt",Date(),()=>{console.log("data written")})

fs.readFile("test2.txt","utf-8",(err,res)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(res)
    }
})

