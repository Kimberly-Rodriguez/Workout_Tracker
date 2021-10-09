const router = require('express').Router();
const workoutRoutes = require('./workoutRoutes');

// http://localhost:5002/api/workout
router.use('/workouts', workoutRoutes);

module.exports = router;