import { AnswerCollectionJourneySchema } from "./AnswerCollectionJourney.js";
import mongoose, { mongo } from "mongoose";
import { QuestionJourneySchema } from "./QuestionJourney.js";

const QuizJourneySchema = mongoose.Schema(
    {
        QuizID: Number,
        Correct: Number,
        Question: QuestionJourneySchema,
        Answers: AnswerCollectionJourneySchema,
        Journey_id: String
    }
);

export const QuizJourneyModel = mongoose.model("Quizzes",
    QuizJourneySchema);