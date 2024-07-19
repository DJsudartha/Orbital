import mongoose, { mongo } from "mongoose";

const UserJourneyProgressSchema = mongoose.Schema(
    {
        CurrJourney: String,
        Progress: Number,
        Hearts: Number,
        LastLoggedTime: Date,
        User_id: String
    }
);

export const UserJourneyProgressModel = mongoose.model("User Journey Progress",
    UserJourneyProgressSchema);