

const express= require("express")
const data= require("./data.json")
const app= express();
const fs= require('fs')

app.use(express.urlencoded({extended: false}))
app.get("/api/users",(req,res)=>{

    res.json(data)
})

app.post("/api/users",(req,res)=>{
    
    const body= req.body;
    data.push({...body,id: data.length+1})
    console.log(body)
    fs.writeFile("./data.json",JSON.stringify(data),(err,dataa)=>{

        return res.json({status:"success",id:data.length})
    })

   
})

app.delete("/api/users/:id",(req,res)=>{
    const index=data.findIndex((u)=> u.id === Number(req.params.id))
    console.log(index)
    data.splice(index,1)
    fs.writeFile("./data.json",JSON.stringify(data),(err,data)=>{
             return res.json({status:"success", id:req.params.id})
    })
   
})



app.listen(8000, ()=> console.log(`the server is running on port 8000`))
