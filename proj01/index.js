
const express= require("express")
const data= require("./data.json")
const port=8000
const app= express();

app.get("/api/users",(req,res)=>{

    return res.json(data)
})


app.get("/users",(req,res)=>{
    const html=`
    <ul> 
    ${data.map((user)=> `<li>${user.first_name}</li>`).join("")}
    </ul>
    `

    res.send(html)
})


app.listen(port,()=>console.log(`Server is running on port: ${port}`))