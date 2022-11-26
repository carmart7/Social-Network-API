const router = require('express').Router();
const {
    createUser,
    getUsers,
    getSpecificUser,
    updateUser
} = require('../../controllers/userController')

// /api/user
router.route('/').post(createUser).get(getUsers);

router.route('/:id').get(getSpecificUser).put(updateUser);

module.exports = router;