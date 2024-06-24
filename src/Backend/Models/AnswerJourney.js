import mongoose, { mongo } from "mongoose";

export const AnswerJourneySchema = mongoose.Schema(
    {
        Title: String,
        Data: [String]
    }
)