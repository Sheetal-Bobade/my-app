const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const wordkoutSchema = new Schema ({
    title:{
        type: Stirng,
        required: true
    },

    reps:{
        type: Number,
        required: true
    },

    load:{
        type: Number,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('Workout', workoutSchema)

Workout.find()

