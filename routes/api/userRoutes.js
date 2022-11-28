const router = require('express').Router();
const {
    createUser,
    getUsers,
    getSpecificUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// /api/user
router.route('/').post(createUser).get(getUsers);

// /api/user/:userid
router.route('/:id').get(getSpecificUser).put(updateUser).delete(deleteUser);

// /api/user/:userid/friends/:friendId
router.route('/:id/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;