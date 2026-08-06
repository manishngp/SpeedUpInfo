const express = require('express');

const app = express();

app.get("/", (req, res)=>{
    res.send({message : "Hello sherians coading school"})
})

app.listen(3000)