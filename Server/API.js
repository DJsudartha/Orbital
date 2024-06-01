const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./models/users')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://ReVerb:IdkWtfToDo@reverb.fi5it34.mongodb.net/Login?retryWrites=true&w=majority&appName=ReVerb");

app.post('/register', (req, res) => {
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
app.listen(4000, () => {
    console.log("server is good")
})