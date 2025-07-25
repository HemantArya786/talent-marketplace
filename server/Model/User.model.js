import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: false
    },
    country: {
        type: String
    },
    avatar: {
        type: String
    },
    loginType:{
        type:String,
        enum:["linkedIn", "google", "email"]
    }
}, { timestamps: true })

const User = mongoose.model('users', UserSchema, 'Users')

export default User;