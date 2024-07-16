import express from "express";
import { SongMetronome } from "../Models/SongMetronome.js";

const Metronome = express.Router();

// Create
Metronome.post("/", async (request, response) => {
    try {
        if (!(request.body.Title && request.body.Tempo &&
            request.body.TimeSignature)) {
            return response
                .status(400)
                .send({ message: "Incomplete data" });
        }

        // else if working
        const newSong = {
            Title: request.body.Title,
            Artist: request.body.Artist,
            Tempo: request.body.Tempo,
            TimeSignature: request.body.TimeSignature,
            User_id: request.body.User_id
        };

        // update DB
        const newSongJoined = await SongMetronome.create(newSong);

        // update server
        return response.status(201).send(newSongJoined);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}
);

// Read All, filtered
Metronome.get("/", async (request, response) => {
    try {
        const filterParams = request.query;
        const songs = await SongMetronome.find({filterParams});

        return response.status(200).json(songs); // problems w/ wrapper'?
    } catch (error) {
        console.log(error.Message);
        return response.status(500).send({ message: error.message });
    }
}
);

// Read Single
Metronome.get("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const songFound = await SongMetronome.findById(id);

        if (!songFound) {
            return response
                .status(404)
                .send({ message: "Song not found" });

        }

        // <-> json and send for diff purposes
        return response.status(200).json({song: songFound}); 
    } catch (error) {
        console.log(error.Message);
        return response.status(500).send({ message: error.message });
    }
}
);

// Update
Metronome.put("/:id", async (request, response) => {
    try {
        if (!(request.body.Title && request.body.Tempo &&
            request.body.TimeSignature)) {
            return response
                .status(400)
                .send({ message: "Incomplete data" });
        }

        const { id } = request.params;
        const songFound = await SongMetronome.findByIdAndUpdate(id, request.body);

        if (!songFound) {
            return response
                .status(404)
                .send({ message: "Song not found" });

        }

        return response.status(200).json(songFound);
    } catch (error) {
        console.log(error.Message);
        return response.status(500).send({ message: error.message });
    }
}
);

// Delete
Metronome.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const songFound = await SongMetronome.findByIdAndDelete(id);

        if (!songFound) {
            return response
                .status(404)
                .send({ message: "Song not found" });

        }

        return response.status(200).send({deleted: songFound});
    } catch (error) {
        console.log(error.Message);
        return response.status(500).send({ message: error.message });
    }
}
);

export default Metronome;