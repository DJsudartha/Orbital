import express from "express";
import { port } from "../Port.js";
import mongoose from "mongoose";
import { MetronomeDBURL } from "../Port.js";
import Metronome from "../Routes/MetronomeRoute.js";
import QuizJourney from "../Routes/QuizRoute.js";
import cors from 'cors';

const UserModel = require('./Models/LoginDetails')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const nodemailer = require('nodemailer')

const homePlaceHolder = express();

homePlaceHolder.use(express.json());

homePlaceHolder.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    exposedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
    preflightContinue: false,
    optionsSuccessStatus: 200,
}));

homePlaceHolder.use(cookieParser())

homePlaceHolder.get("/", (request, response) => {
        console.log(request);
        return response.json("hello");
    }
);

homePlaceHolder.use("/metronome", Metronome);

homePlaceHolder.use("/musicJourney", QuizJourney);
// need to refactor soon

mongoose
    .connect(MetronomeDBURL)
    .then(() => {
        console.log("connected to DB, attempting to connect to backend server");
        homePlaceHolder
            .listen(port, () => console.log("connected to backend server")); 
    })
    .catch((error) => {
        console.log(error);
    }
);

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
homePlaceHolder.post('/login', (req, res) => {
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

homePlaceHolder.post('/register', async (req, res) => {
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

homePlaceHolder.post("/forgot-password", async (req, res) => {
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

homePlaceHolder.post("/reset-password/:id/:token", (req, res) => {
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

homePlaceHolder.get("/getter", async (request, response) => {
    try {
        const UserData = await UserModel.find({});

        return response.status(200).json({list: UserData}); // problems w/ wrapper'?
    } catch (error) {
        console.log(error.Message);
        return response.status(500).send({ message: error.message });
    }
}
);