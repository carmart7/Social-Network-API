const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (dataInput) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(dataInput)
                }
            }
        },
        thoughts: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'Thought'
            },
        ],
        friends: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

const virtualFriendCount = userSchema.virtual('friendCount');

virtualFriendCount.get(function () {
    return `${this.friends.length}`;
});

const User = mongoose.model('User', userSchema);

module.exports = User;