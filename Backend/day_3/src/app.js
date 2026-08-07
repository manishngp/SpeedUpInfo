const express = require('express');
const noteModel = require('./models/note.model')

const app = express();


app.use(express.json());


app.post("/notes", async (req, res)=>{
        const data = await req.body;
       await noteModel.create({
        title:data.title,
        description : data.description
       })

       res.status(201).json({
        message:"note created successfully"
       })
})

app.get("/notes" , async(req, res)=>{

      const notes = await noteModel.find() // gives an array of data
       res.status(200).json({
            message : "data fetched successfully",
            notes : notes

       })
})

app.delete("/notes/:id", async (req, res)=>{
    const id = await req.params.id;
    await noteModel.findOneAndDelete({
        _id : id
    })

    res.status(200).json({
        message : "note deleted successfully"
    })
})

app.patch("/notes/:id", async(req, res)=>{
    const id = await req.params.id;
    const description = await req.body.description;

    await noteModel.findOneAndUpdate({
        _id :id
    },{
        description : description
    })

    res.status(200).json({
        message : "notes updated successfully"
    })
})

module.exports= app;