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
    },
    getSpecificThought(req, res) {
        Thought.findById(req.params.thoughtId)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    updateThought(req, res) {
        Thought.findByIdAndUpdate(req.params.thoughtId, { thoughtText: req.body.thoughtText })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {
        Thought.findByIdAndDelete(req.params.thoughtId)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    }

}