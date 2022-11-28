const router = require('express').Router();
const {
    createThought,
    getThoughts,
    getSpecificThought,
    updateThought
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').post(createThought).get(getThoughts);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSpecificThought).put(updateThought)

module.exports = router;