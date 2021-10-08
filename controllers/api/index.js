const router = require('express').Router();
const Workout = require('./models/Workout');


// http://localhost:5002/api/workout
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

// http://localhost:5002/api/workout/(id/number)
router.put('/api/workout/:id', ({body, params}, res) => {
  Workout.findByIdAndUpdate(params.id, {
    $push: {exercises: body}
    })
    .then(userData => {
      res.json(userData);
    })
    .catch(err => {
      res.json(err)
    });
});


module.exports = router;