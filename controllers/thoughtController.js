const { User, Thought } = require('../models');
const { Types } = require('mongoose');

module.exports = {
    createThought(req, res) {
        Thought.create(req.body)
            .then(async (thought) => {
                await User.findByIdAndUpdate(req.body.userId, { $addToSet: { thoughts: thought._id} });
                return res.json(thought);
            })
            .catch((err) => res.status(500).json(err));
    },
    getThoughts(req, res) {
        Thought.find()
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err))
    }
}