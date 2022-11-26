const router = require('express').Router();
const {
    createUser,
    getUsers,
    getSpecificUser
} = require('../../controllers/userController')

// /api/user
router.route('/').post(createUser).get(getUsers);

router.route('/:id').get(getSpecificUser);

module.exports = router;