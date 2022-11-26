const router = require('express').Router();
const {
    createUser
} = require('../../controllers/userController')

// /api/user
router.route('/').post(createUser);

module.exports = router;