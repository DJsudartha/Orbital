import express from "express"
import { QuizJourneyCollectionModel } from "../Models/QuizJourneyCollection.js";

const QuizCollection = express.Router();

//Save a new Quiz Collection
QuizCollection.post("/", async (request, response) => {
    try {
        if (!request.body.Name && !request.body.Image) {
            return response
                .status(400)
                .send({ message: "Incomplete data" });
        }

        // else if working
        const newQuizCollection = {
            Name: request.body.Name,
            Image: request.body.Image
        };

        // update DB
        const newQuizCollectionJoined = await QuizJourneyCollectionModel.create(newQuizCollection);

        // update server
        return response.status(201).send(newQuizCollectionJoined);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}
);

// Read All / get Journey Collections
QuizCollection.get("/", async (request, response) => {
    try {
        const journeyCollection = await QuizJourneyCollectionModel.find({});
        return response.status(200).json(journeyCollection); // problems w/ wrapper'?
    } catch (error) {
        console.log(error.Message);
        return response.status(500).send({ message: error.message });
    }
}
);

// Read Single
QuizCollection.get("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const quizCollectionFound = await QuizJourneyCollectionModel.findById(id);

        if (!quizCollectionFound) {
            return response
                .status(404)
                .send({ message: "Quiz Collection not found" });

        }

        // <-> json and send for diff purposes
        return response.status(200).json({ collection: quizCollectionFound });
    } catch (error) {
        console.log(error.Message);
        return response.status(500).send({ message: error.message });
    }
}
);

// Update
QuizCollection.put("/:id", async (request, response) => {
    try {
        if (!request.body.Name && !request.body.Image) {
            return response
                .status(400)
                .send({ message: "Incomplete data" });
        }

        const { id } = request.params;
        const quizCollectionFound = await QuizJourneyCollectionModel.findByIdAndUpdate(id, request.body);

        if (!quizCollectionFound) {
            return response
                .status(404)
                .send({ message: "Quiz not found" });

        }

        return response.status(200).json(quizCollectionFound);
    } catch (error) {
        console.log(error.Message);
        return response.status(500).send({ message: error.message });
    }
}
);

// Delete
QuizCollection.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const quizCollectionFound = await QuizJourneyCollectionModel.findByIdAndDelete(id);

        if (!quizCollectionFound) {
            return response
                .status(404)
                .send({ message: "Quiz Collection not found" });

        }

        return response.status(200).send({ deleted: quizCollectionFound });
    } catch (error) {
        console.log(error.Message);
        return response.status(500).send({ message: error.message });
    }
}
);

export default QuizCollection;