const router = require('express').Router();
const userRoutes = require('./userRoutes');
// require routes for Thought

router.use('/users', userRoutes);
// router.use('./thought', thoughtRoutes);

module.exports = router;