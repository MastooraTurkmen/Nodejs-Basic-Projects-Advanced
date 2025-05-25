// One to One


// One document is related to one other document.

// User Schema
const UserSchema = new mongoose.Schema({
    name: String,
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile"
    }
})

// Profile Schema

const ProfileSchema = new mongoose.Schema({
    bio: String,
    avatar: String
})