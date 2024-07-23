import mongoose, { mongo } from "mongoose";

const QuizJourneyCollectionSchema = mongoose.Schema(
    {
        Name: String,
        Image: String,
        Reference: Number
    }
);

export const QuizJourneyCollectionModel = mongoose.model("journey collection",
    QuizJourneyCollectionSchema);