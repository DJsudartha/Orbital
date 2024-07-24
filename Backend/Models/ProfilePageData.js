    import mongoose from "mongoose"

    const ProfileSchema = new mongoose.Schema({
        description: {type: String, default: 'Hi there!'},
        username: {type: String, default: 'NoName'},
        avatar: {type: String, default: 'Default'}
    })

    export default ProfileSchema