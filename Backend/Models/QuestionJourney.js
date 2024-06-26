import mongoose, { mongo } from "mongoose";

export const QuestionJourneySchema = mongoose.Schema(
    {
        Var: String,
        Title: String,
        Data: [String]
    }
)