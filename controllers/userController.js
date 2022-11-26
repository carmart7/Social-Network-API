const { User, Thought } = require('../models');

module.exports = {
    // Create a new user with request body data 
    createUser(req, res) {
        User.create(req.body)
        .then((student) => res.json(student))
        .catch((err) => res.status(500).json(err));
    },
    getUsers(req, res) {
        User.find()
            .populate('thoughts')
            .populate('friends')
            .then((student) => res.json(student))
            .catch((err) => res.status(500).json(err));
    },
    getSpecificUser(req, res) {
        User.findOne({ _id: req.params.id})
            .populate('thoughts')
            .populate('friends')
            .then((student) => res.json(student))
            .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.updateOne({ _id: req.params.id }, { username: req.body.username })
            .then((student) => res.json(student))
            .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
        User.deleteOne({ _id: req.params.id })
            .then((student) => res.json(student))
            .catch((err) => res.status(500).json(err));
    }
};