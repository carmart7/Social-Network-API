const router = require('express').Router();
const {
    createThought,
    getThoughts,
    getSpecificThought
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').post(createThought).get(getThoughts);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSpecificThought)

module.exports = router;