import mongoose, { mongo } from "mongoose";

const UserJourneyProgressSchema = mongoose.Schema(
    {
        CurrJourney: String,
        Progress: Number,
        Hearts: Number,
        LastLoggedTime: Date,
        User_id: String,
        Completed: Array 
    }
);

export const UserJourneyProgressModel = mongoose.model("User Journey Progress",
    UserJourneyProgressSchema);