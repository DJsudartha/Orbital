import mongoose from "mongoose"
import ProfileSchema from "./ProfilePageData.js"


const HighscoresSchema = new mongoose.Schema({
    easy: { type: Number },
    medium: { type: Number },
    hard: { type: Number }
});

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    profileData: {type: ProfileSchema},
    newAccount: {type: Boolean},
    highscores: {type: HighscoresSchema}
})

const UserModel = mongoose.model("Users", UserSchema)
export default UserModel