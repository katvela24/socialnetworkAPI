const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Creating the Schema for user.
const reactionSchema = new Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },
   reactionBody: {
        type: String, 
        required: true,
        maxlength: 280,
    },
    username: {
        type: String, 
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: createdVal => createdVal.toLocaleString()
    },
})

module.exports = reactionSchema