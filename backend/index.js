const express = require("express")

const app = express();

app.get('/display' , function (req , res) {
    res.send("hi from backend")
})

console.log("hii there")

app.listen(3000)