const express = require('express')
const Workout = require('../models/WorkoutModel')

const router= express.Router()

// GET All Workouts
router.get('/', ( req, res ) => {
    res.json({Message: 'GET all workouts'})
})

// GET a single workout
router.get('/:id', ( req, res ) => {
    res.json({Message: 'GET a single workout'})
})

// POST a new workout
router.post('/', async ( req, res ) => {
   const {title, load, reps} = req.body

   try{
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json(workout)

   }catch (error){
    res.status(400).json({error: error.message})

   }

    res.json({Message: 'POST a new workout'})
})

// DELETE a workout
router.delete('/:id', ( req, res ) => {
    res.json({Message: 'DELETE a workout'})
})

// UPDATE a new workout
router.patch('/:id', ( req, res ) => {
    res.json({Message: 'UPDATE a workout'})
})


module.exports = router