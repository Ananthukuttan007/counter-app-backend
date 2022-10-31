const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const counterModel = require('./models/counter');


app.use(bodyParser.json());
app.use(cors());


app.get('/', async (req, res) => {
    try {
        let data = await counterModel.find();
        res.status(200).json({
            status: "success",
            result: data
        })
    }
    catch (e) {
        res.status(400).json({ message: "e.message" })
    }
})
app.post('/', async (req, res) => {
    try {
        let data = await req.body;
        let newBlog = new counterModel(data);
        newBlog.save();
        console.log(newBlog);
        res.status(200).json({
            status: "success",
            result: newBlog
        })
    }
    catch (e) {
        res.status(400).json({ message: "e.message" })
    }
})
//"635fd8d429ba95d412a97efc"

app.put('/', async (req, res) => {
    try {
        let data = await req.body;
        let updatedData = await counterModel.findByIdAndUpdate("635fd8d429ba95d412a97efc", data);
        res.status(200).json({
            status: "success",
            result: updatedData
        })
    }
    catch (e) {
        console.log(e.message)
        res.status(400).json({ message: "e.message" })
    }
})






module.exports = app;