const router = require('express').Router();
const { Workout } = require('../../models');



// http://localhost:5002/api/workouts
router.get('/', (req, res) => {
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
  
  // http://localhost:5002/api/workouts/(id/number)
  router.put('/:id', ({body, params}, res) => {
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
  
  // http://localhost:5002/api/workouts
  router.post('/', (req,res) => {
    Workout.create({})
    .then(userData => {
      res.json(userData);
    })
    .catch(err => {
      res.json(err)
    })
  })
  // http://localhost:5002/api/workouts/range`
  router.get('/range', (req, res) => {
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