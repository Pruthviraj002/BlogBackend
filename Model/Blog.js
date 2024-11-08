const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    }
})

module.exports = mongoose.model("Blog", BlogSchema)



