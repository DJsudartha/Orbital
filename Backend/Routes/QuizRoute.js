import express from "express";
import { QuizJourneyModel } from '../Models/QuizJourney.js'

const QuizJourney = express.Router();

//Save a new Quiz
QuizJourney.post("/", async (request, response) => {
    try {
        if (!(request.body.QuizID && request.body.Correct &&
            request.body.Question && request.body.Answers &&
            request.body.Journey_id)) {
            return response
                .status(400)
                .send({ message: "Incomplete data" });
        }

        // else if working
        const newQuiz = {
            QuizID: request.body.QuizID,
            Correct: request.body.Correct,
            Question: request.body.Question,
            Answers: request.body.Answers,
            Journey_id: request.body.Journey_id
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

// Read All / get Journey
QuizJourney.get("/", async (request, response) => {
    try {
        const { Journey_id } = request.query;
        const journey = await QuizJourneyModel.find({Journey_id: Journey_id})
            .sort({ QuizID: "asc" });

        return response.status(200).json(journey); // problems w/ wrapper'?
    } catch (error) {
        console.log(error.Message);
        return response.status(500).send({ message: error.message });
    }
}
);

// Read Single
QuizJourney.get("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const quizFound = await QuizJourneyModel.findById(id);

        if (!quizFound) {
            return response
                .status(404)
                .send({ message: "Quiz not found" });

        }

        // <-> json and send for diff purposes
        return response.status(200).json({ quiz: quizFound });
    } catch (error) {
        console.log(error.Message);
        return response.status(500).send({ message: error.message });
    }
}
);

// Update
QuizJourney.put("/:id", async (request, response) => {
    try {
        if (!(request.body.QuizID && request.body.Correct &&
            request.body.Question && request.body.Answers)) {
            return response
                .status(400)
                .send({ message: "Incomplete data" });
        }

        const { id } = request.params;
        const quizFound = await QuizJourneyModel.findByIdAndUpdate(id, request.body);

        if (!quizFound) {
            return response
                .status(404)
                .send({ message: "Quiz not found" });

        }

        return response.status(200).json(quizFound);
    } catch (error) {
        console.log(error.Message);
        return response.status(500).send({ message: error.message });
    }
}
);

// Delete
QuizJourney.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const quizFound = await QuizJourneyModel.findByIdAndDelete(id);

        if (!quizFound) {
            return response
                .status(404)
                .send({ message: "Quiz not found" });

        }

        return response.status(200).send({ deleted: quizFound });
    } catch (error) {
        console.log(error.Message);
        return response.status(500).send({ message: error.message });
    }
}
);

export default QuizJourney;