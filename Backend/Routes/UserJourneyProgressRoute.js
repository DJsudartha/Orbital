import express from "express"
import { UserJourneyProgressModel } from "../Models/UserJourneyProgress.js"

const UserJourneyProgress = express.Router();

//Save a new Quiz Collection
UserJourneyProgress.post("/", async (request, response) => {
    try {
        if (!(request.body.CurrJourney && request.body.Hearts &&
            request.body.LastLoggedTime && request.body.Progress &&
            request.body.User_id)) {
            return response
                .status(400)
                .send({ message: "Incomplete data" });
        }

        // else if working
        const newUserJourneyProgress = {
            CurrJourney: request.body.CurrJourney,
            Progress: request.body.Progress,
            Hearts: request.body.Hearts,
            LastLoggedTime: request.body.LastLoggedTime,
            User_id: request.body.User_id
        };

        // update DB
        const newUserJourneyProgressJoined = await UserJourneyProgressModel.create(newUserJourneyProgress);

        // update server
        return response.status(201).send(newUserJourneyProgressJoined);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}
);

// update so that u singly filter according to userID
UserJourneyProgress.get("/", async (request, response) => {
    try {
        const { User_id } = request.query;
        const userJourneyProgress = await UserJourneyProgressModel.findOne({ User_id: User_id });

        if (!userJourneyProgress) {
            return response
                .send({ User_id: "missing" });
        }

        return response.status(200).json(userJourneyProgress); // problems w/ wrapper'?
    } catch (error) {
        console.log(error.Message);
        return response.status(500).send({ message: error.message });
    }
}
);

// Update
UserJourneyProgress.put("/:id", async (request, response) => {
    try {
        if (!(request.body.CurrJourney && request.body.Hearts &&
            request.body.LastLoggedTime && request.body.Progress &&
            request.body.User_id)) {
            return response
                .status(400)
                .send({ message: "Incomplete data" });
        }

        const { id } = request.params;
        const userJourneyProgressFound = await UserJourneyProgressModel.findByIdAndUpdate(id, request.body);

        if (!userJourneyProgressFound) {
            return response
                .status(404)
                .send({ message: "progress not found" });

        }

        return response.status(200).json(userJourneyProgressFound);
    } catch (error) {
        console.log(error.Message);
        return response.status(500).send({ message: error.message });
    }
}
);

// Delete
UserJourneyProgress.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const userJourneyProgressFound = await UserJourneyProgressModel.findByIdAndDelete(id);

        if (!userJourneyProgressFound) {
            return response
                .status(404)
                .send({ message: "progress not found" });

        }

        return response.status(200).send({ deleted: userJourneyProgressFound });
    } catch (error) {
        console.log(error.Message);
        return response.status(500).send({ message: error.message });
    }
}
);

export default UserJourneyProgress;