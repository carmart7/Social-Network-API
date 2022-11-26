const { User, Thought } = require('../models');

// function that deletes thoughts with the associated username
function deleteRelatedThoughts (id) {
    Thought.deleteMany({ _id: id});
}

module.exports = {
    //  Create a new user with request body data 
    createUser(req, res) {
        User.create(req.body)
        .then((student) => res.json(student))
        .catch((err) => res.status(500).json(err));
    },
    // Get all users
    getUsers(req, res) {
        User.find()
            .populate('thoughts')
            .populate('friends')
            .then((student) => res.json(student))
            .catch((err) => res.status(500).json(err));
    },
    // Get specific User by Id
    getSpecificUser(req, res) {
        User.findOne({ _id: req.params.id})
            .populate('thoughts')
            .populate('friends')
            .then((student) => res.json(student))
            .catch((err) => res.status(500).json(err));
    },
    // Update a User's username by Id
    updateUser(req, res) {
        User.updateOne({ _id: req.params.id }, { username: req.body.username })
            .then((student) => res.json(student))
            .catch((err) => res.status(500).json(err));
    },
    // Delete a User by Id
    deleteUser(req, res) {
        User.deleteOne({ _id: req.params.id })
            .then((student) => {
                deleteRelatedThoughts(req.params.id) //delete related thoughts
                return res.json(student)
            })
            .catch((err) => res.status(500).json(err));
    }
};