import mongoose, { mongo } from "mongoose";
import { AnswerJourneySchema } from "./AnswerJourney.js";

export const AnswerCollectionJourneySchema = mongoose.Schema(
    {
        Var: String,
        Data: [AnswerJourneySchema]
    }
)