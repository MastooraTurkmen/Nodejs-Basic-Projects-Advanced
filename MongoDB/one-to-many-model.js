// One document is related to many documents.

// Post Schema
const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})


// Comment Schema

const commentSchema = new mongoose.Schema({
    text: String,
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }
})