import express from "express";
import { port } from "../Port.js";
import mongoose from "mongoose";
import { MetronomeDBURL } from "../Port.js";
import Metronome from "../Routes/MetronomeRoute.js";
import QuizJourney from "../Routes/QuizRoute.js";
import cors from 'cors';
import UserModel from '../Models/LoginDetails.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookieParser from "cookie-parser";
import nodemailer from 'nodemailer';
import LoginPage from "../Routes/LoginRoute.js";
import QuizCollection from "../Routes/QuizCollectionRoute.js";
import UserJourneyProgress from "../Routes/UserJourneyProgressRoute.js";


const homePlaceHolder = express();

homePlaceHolder.use(express.json());

homePlaceHolder.use(cors());

homePlaceHolder.use(cookieParser())

homePlaceHolder.get("/", (request, response) => {
    console.log(request);
    return response.json("hello");
}
);

homePlaceHolder.use("/metronome", Metronome);

homePlaceHolder.use("/musicJourney", QuizJourney);

homePlaceHolder.use("/verification", LoginPage);

homePlaceHolder.use("/musicJourneyCollection", QuizCollection);

homePlaceHolder.use("/userJourneyProgress", UserJourneyProgress);

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