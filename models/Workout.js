const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "type is Required",
      },
      name: {
        type: String,
        trim: true,
        required: " Name is Required",
      },
      duration: {
        type: Number,
        trim: true,
        required: " Duration is Required",
      },
      weight: Number,

      reps: Number,

      sets: Number,

      distance: Number,
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
