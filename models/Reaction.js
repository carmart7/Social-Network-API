const mongoose = require('mongoose');

const reactionSchema = mongoose.Schema(
    {
        reactionId: {
            type: mongoose.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate
        }
    },
    {
        toJSON: {
            getters: true
        },
        _id: false

    }
)

function formatDate(createdAt) {
    return createdAt.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
}

module.exports = reactionSchema;