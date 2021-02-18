const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, 'Please add a author'],
        unique: true,
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    content: {
        type: String,
        required: true,
        maxlength: [3000, 'Description cannot be more than 3000 characters']
    },
    imgs: [
        {
            type: String
        }
    ],
    dateCreated: {
        type: Date,
        default: new Date()
    },
    tags: [
        {
            type: String
        }
    ],
    likes: {
        type: Number
    },
    comments: [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
})

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema);