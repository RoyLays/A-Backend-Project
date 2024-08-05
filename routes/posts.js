const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    imageText: {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:  'User'
    },
    createdAt: { 
        type: Date,
        default: Date.now,
    },
    likes: {
        type: Array,
        default: [],
    },
});

module.exports  = mongoose.model('Post', postSchema);

