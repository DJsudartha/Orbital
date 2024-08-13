import mongoose from "mongoose"

const ProfileSchema = new mongoose.Schema({
    description: {type: String, default: 'Hi there!'},
    username: {type: String, default: 'noName'},
    avatar: {type: String, default: 'default'}

})

export default ProfileSchema