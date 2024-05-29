import mongoose, { mongo } from "mongoose";

const SongMetronomeSchema = mongoose.Schema(
    {
        Title: {
            type: String,
            required: true
        },
        Artist: {
            type: String,
            required: false,
            default: "Unkown Artist"
        },
        Tempo: { // will have limited options
            type: Number,
            required: true
        },
        TimeSignature: { // will have very limited options
            type: String,
            required: true
        }
    }
);

export const SongMetronome = mongoose.model("Songs in Metronome",
    SongMetronomeSchema);