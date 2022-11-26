const { User, Thought } = require('../models');

module.exports = {
    // Create a new user with request body data 
    createUser(req, res) {
        User.create(req.body)
            .then((student) => res.json(student))
            .catch((err) => res.status(500).json(err));
    },
}