const express = require('express')

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
router.post('/', ( req, res ) => {
   const {title, load, reps} = req.body

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