import express from "express";
import UserModel from '../Models/LoginDetails.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookieParser from "cookie-parser";
import nodemailer from 'nodemailer';

const LoginPage = express.Router();

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
LoginPage.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        const token = jwt.sign({ email: user.email }, "iamindo", { expiresIn: "1d" })
                        res.cookie("token", token)
                        return res.json({
                            "Success": "Success", 
                            "_id": user._id,
                            "newAccount": user.newAccount
                        })
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

LoginPage.post('/register', async (req, res) => {
    try {
        if (!(req.body.name && req.body.email && req.body.password)) {
            return res
                .status(400)
                .send({ message: "Incomplete data" });
        }

        const { name, email, password } = req.body;
        const temporaryProfileData = {
            description: "Null",
            username: "NoName",
            avatar: "Default"
        }
        bcrypt.hash(password, 10)
            .then(hash => {
                UserModel.create({ name, email, password: hash, profileData: temporaryProfileData, newAccount: true})
                    .then(Data => res.json(Data))
                    .catch(error => res.json(error.message))
            })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

LoginPage.post("/forgot-password", async (req, res) => {
    const { email } = req.body
    res.json(email)
    UserModel.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.send({ Status: "User not found" })
            }
            const token = jwt.sign({ id: user._id }, "iamindo", { expiresIn: "1d" })
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

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    return res.send({ Status: "Success" })
                }
            });
        })
}
)

LoginPage.post("/reset-password/:id/:token", (req, res) => {
    const { id, token } = req.params
    const { password } = req.body

    jwt.verify(token, "iamindo", (err, user) => {
        if (err) {
            return res.json("Token is wrong")
        } else {
            bcrypt.hash(password, 10)
                .then(hash => {
                    UserModel.updateOne({ _id: id }, { password: hash })
                        .then(Data => res.json(Data))
                        .catch(error => res.json(error.message))
                })
                .catch(error => res.json({ Status: error.message }))
        }
    })
})

LoginPage.post("/profile-maker/:id", async (req, res) => {
    const { id } = req.params;
    const { username, description, avatar } = req.body;

    try {
        const user = await UserModel.findById(id);

        if (!user) {
            return res.status(404).json({ status: "User not found" });
        }
    
        user.profileData.username = username;
        user.profileData.description = description;
        user.profileData.avatar = avatar;
        user.newAccount = false;

        const updatedUser = await user.save();

        return res.json(updatedUser);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

LoginPage.get("/profile-page/:id", async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserModel.findById(id).select('profileData name email').exec();
        
        if (!user) {
            return res.send({ Status: "User not found" })
        }
        return res.json({
            profileData: user.profileData,
            name: user.name,
            email: user.email
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

LoginPage.get("/getter", async (request, response) => {
    try {
        const UserData = await UserModel.find({});

        return response.status(200).json({ list: UserData }); // problems w/ wrapper'?
    } catch (error) {
        console.log(error.Message);
        return response.status(500).send({ message: error.message });
    }
}
);

export default LoginPage;
