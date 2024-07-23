import mongoose from "mongoose"

const ProfileSchema = new mongoose.Schema({
    description: {type: String, default: 'Hi there!'},
    username: {type: String, required: true},
    avatar: {type: String, default: ''}
})

export default ProfileSchema