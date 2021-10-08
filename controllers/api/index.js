const router = require('express').Router();
const workoutRoutes = require('./workoutRoutes');


// http://localhost:5001/api/user
router.use('/workout', workoutRoutes);


module.exports = router;