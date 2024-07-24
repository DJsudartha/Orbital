import mongoose from "mongoose"
import ProfileSchema from "./ProfilePageData.js"

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    profileData: {type: ProfileSchema}
})

const UserModel = mongoose.model("Users", UserSchema)
export default UserModel