const router = require('express').Router();
const Workout = require('./models/Workout');


// http://localhost:5001/api/workout
router.get('/api/workout', (req, res) => {
Workout.aggregate([
  {$addFields: {totalDuration: { $sum: "$exercises.duration"} } },
])
.then(userData => {
  res.json(userData);
})
.catch(err => {
  res.json(err)
});
});


module.exports = router;