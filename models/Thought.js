const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

function formatDate(createdAt) {
    return createdAt.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
}

const virtualReactionCount = thoughtSchema.virtual('reactionCount');

virtualReactionCount.get(function () {
    return `${this.reactions.length}`
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;