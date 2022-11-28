const { User, Thought } = require('../models');
const { Types } = require('mongoose');

// function that deletes thoughts with the associated username
function deleteRelatedThoughts (id) {
    Thought.deleteMany({ _id: id});
}

module.exports = {
    //  Create a new user with request body data 
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // Get all users
    getUsers(req, res) {
        User.find()
            .populate('thoughts')
            .populate('friends')
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // Get specific User by Id
    getSpecificUser(req, res) {
        User.findOne({ _id: req.params.id})
            .populate('thoughts')
            .populate('friends')
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // Update a User's username by Id
    updateUser(req, res) {
        User.updateOne({ _id: req.params.id }, { username: req.body.username })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // Delete a User by Id
    deleteUser(req, res) {
        User.deleteOne({ _id: req.params.id })
            .then((user) => {
                deleteRelatedThoughts(req.params.id) //delete related thoughts
                return res.json(user);
            })
            .catch((err) => res.status(500).json(err));
    },
    // Add a friend 
    addFriend(req, res) {
        User.findByIdAndUpdate(req.params.id, { $addToSet: { friends: { _id: Types.ObjectId(req.params.friendId) } } })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // Remove a friend
    removeFriend(req, res) {
        User.findByIdAndUpdate(req.params.id, { $pull: { friends: Types.ObjectId(req.params.friendId) } })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    }
};