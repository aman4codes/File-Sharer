import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    profilePicture: {
        public_id: String,
        url: String
    }
});

const User = mongoose.model("User", userSchema);

export default User;