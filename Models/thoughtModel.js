const mongoose = require('mongoose');
const reactionSchema = require('./reactionModel');
const Schema = mongoose.Schema

// Creating the Schema for thought.
const thoughtSchema = new Schema({
    thoughtText: {
        type: String, 
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdVal => createdVal.toLocaleString()
    },
    username: {
        type: String, 
        required: true,
        
    },

    reactions: [reactionSchema]

})
//Returns the length of the reactions array
thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length
})
// Creating a model with the Schema and labeling it as "Thought"
const thoughtModel = mongoose.model("Thought",thoughtSchema)
module.exports = thoughtModel