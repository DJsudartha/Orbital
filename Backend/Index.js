import express from "express";
import { port } from "./Port.js";
import mongoose from "mongoose";
import { MetronomeDBURL } from "./Port.js";
import Metronome from "./Routes/MetronomeRoute.js";
import cors from 'cors';

const homePlaceHolder = express();

homePlaceHolder.use(express.json());

homePlaceHolder.use(cors());

homePlaceHolder.get("/", (request, response) => {
        console.log(request);
        return response.status(200).send("200");
    }
);

homePlaceHolder.use("/Metronome", Metronome);

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