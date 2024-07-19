import mongoose, { mongo } from "mongoose";

const QuizJourneyCollectionSchema = mongoose.Schema(
    {
        Name: String,
        Image: String
    }
);

export const QuizJourneyCollectionModel = mongoose.model("journey collection",
    QuizJourneyCollectionSchema);