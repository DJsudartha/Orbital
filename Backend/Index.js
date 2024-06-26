import express from "express";
import { port } from "./Port.js";
import mongoose from "mongoose";
import { MetronomeDBURL } from "./Port.js";
import Metronome from "./Routes/MetronomeRoute.js";
import QuizJourney from "./Routes/QuizRoute.js";
import cors from 'cors';

const homePlaceHolder = express();

homePlaceHolder.use(express.json());

homePlaceHolder.use(cors(
    {
        origin: ["https://deploy-mern-1-whq.vercel.app"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }
));

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