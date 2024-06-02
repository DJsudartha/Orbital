const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./models/users')
const MONGODB_URL = "mongodb+srv://ReVerb:IdkWtfToDo@reverb.fi5it34.mongodb.net/Login?retryWrites=true&w=majority&appName=ReVerb"


const app = express()
app.use(express.json())
app.use(cors())

mongoose
    .connect(MONGODB_URL)
    .then(() => {
        console.log("connected to DB, attempting to connect to backend server");
        app
            .listen(3001, () => console.log("connected to backend server")); 
    })
    .catch((error) => {
        console.log(error);
    }
)

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("Wrong Password")
            }
        } else {
            res.json("No user detected")
        }
    })
})

app.post('/register', async (req, res) => {
    try {
        if (!(req.body.name && req.body.email && req.body.password)) {
                        return res
                            .status(400)
                            .send({ message: "Incomplete data" });
                    }

            const Data = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
        };

        const AllData = await UserModel.create(Data)

        return res.status(201).json({created : Data});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

app.get("/getter", async (request, response) => {
    try {
        const UserData = await UserModel.find({});

        return response.status(200).json({list: UserData}); // problems w/ wrapper'?
    } catch (error) {
        console.log(error.Message);
        return response.status(500).send({ message: error.message });
    }
}
);