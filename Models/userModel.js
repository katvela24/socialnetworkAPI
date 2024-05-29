const mongoose = require('mongoose');
const Schema = mongoose.Schema
const emailRegex =  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

// Creating the Schema for user.
const userSchema = new Schema({
    username: {
        type: String, 
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String, 
        unique: true,
        required: true,
        match: [emailRegex, "Please provide a valid email"],
    },
    thoughts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Thought",
    }],

    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }]

})
//Returns the length of the friends array
userSchema.virtual("friendCount").get(function(){
    return this.friends.length
})
// Creating a model with the Schema and labeling it as "User"
const userModel = mongoose.model("User",userSchema)
module.exports = userModel