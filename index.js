const express = require("express")
const app =  express()
const PORT = 5500


//localHost
app.get("/",(req.res)=>{
    res.send("Welcome to my RESTful API!")
});


app.listen(PORT,()=>{
    console.log(`Hicham API is up and running on port ${PORT}`)
})