const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg:'GET all workouts'})
}) //if there is a slash again after the workouts we call this function  

// Get a single workout
router.get("/:id'",(req,res) => {
    res.json({msg:'Get a single workout '})
})

//post a new workout
router.post('/', (req, res) => {
    res.json({msg:'POST a new workout'})
})

//Delete a workout
router.delete('/', (req, res) => {
    res.json({msg:'DELETE a new workout'})
})

//UPDATE a workout
router.patch('/', (req, res) => {
    res.json({msg:'UPDATE    a new workout'})
})

module.exports = router

