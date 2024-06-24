import express from "express";
import { QuizJourneyModel } from '../Models/QuizJourney.js'

const QuizJourney = express.Router();

//Save a new Quiz
QuizJourney.post("/", async (request, response) => {
    try {
        if (!(request.body.QuizID && request.body.Correct &&
            request.body.Question && request.body.Answers)) {
            return response
                .status(400)
                .send({ message: "Incomplete data" });
        }

        // else if working
        const newQuiz = {
            QuizID: request.body.QuizID,
            Correct: request.body.Correct,
            Question: request.body.Question,
            Answers: request.body.Answers
        };

        // update DB
        const newQuizJoined = await QuizJourneyModel.create(newQuiz);

        // update server
        return response.status(201).send(newQuizJoined);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}
);

export default QuizJourney;