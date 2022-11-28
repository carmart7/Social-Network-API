const router = require('express').Router();
const {
    createThought,
    getThoughts,
    getSpecificThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').post(createThought).get(getThoughts);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSpecificThought).put(updateThought).delete(deleteThought);

module.exports = router;