import { MONGODB_LOGIN } from "../Port.js";

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./Models/LoginDetails')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const nodemailer = require('nodemailer')
const port = 3001


const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    exposedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
    preflightContinue: false,
    optionsSuccessStatus: 200,
}))
app.use(cookieParser())

mongoose
    .connect(MONGODB_LOGIN)
    .then(() => {
        console.log("connected to DB, attempting to connect to backend server");
        app
            .listen(port, () => console.log("connected to backend server")); 
    })
    .catch((error) => {
        console.log(error);
    }
)

const verifyFunction = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.json("You are not logged in")
    } else {
        jwt.verify(token, "iamindo", (err, user) => {
            if (err) {
                return res.json("Token is wrong")
            } else {
                req.user = user
                next()
            }
        })
    }

    }
app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) { 
                    const token = jwt.sign({email: user.email}, "iamindo", {expiresIn: "1d"})
                    res.cookie("token", token)
                    return res.json("Success") 
                }
                else { 
                    return res.json("Wrong Password") 
                }
    
            })
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

        const {name, email, password} = req.body;
        bcrypt.hash(password, 10)
        .then(hash => {
            UserModel.create({name, email, password: hash})
            .then(Data => res.json(Data))
            .catch(error => res.json(error.message))
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

app.post("/forgot-password", async (req, res) => {
    const {email} = req.body
    res.json(email)
    UserModel.findOne({email: email})
    .then(user => {
        if(!user) {
            return res.send({Status: "User not found"})
        }
        const token = jwt.sign({id: user._id}, "iamindo", {expiresIn: "1d"})
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: '777mcduck@gmail.com',
              pass: 'jlzm fqqs wwuz dyct'
            }
          });
          
          var mailOptions = {
            from: '777mcduck@gmail.com',
            to: email,
            subject: 'Reset Password Link',
            text: `http://localhost:5173/reset-password/${user._id}/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              return res.send({Status: "Success"})
            }
          });
    })}
    )

app.post("/reset-password/:id/:token", (req, res) => {
    const {id, token} = req.params
    const {password} = req.body

    jwt.verify(token, "iamindo", (err, user) => {
        if (err) {
            return res.json("Token is wrong")
        } else {
            bcrypt.hash(password, 10)
           .then(hash => {
                UserModel.updateOne({_id: id}, {password: hash})
               .then(Data => res.json(Data))
               .catch(error => res.json(error.message))
            })
            .catch(error => res.json({Status: error.message}))
        }
    })
} )

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