const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

// @desc getgoals
// @routes  Get /api/getgoals
// @access Private
const getGoals = asyncHandler(async(req,res)=>{
    const goals = await Goal.find()
    res.json(goals)
})

// @desc Set Goals
// @routes  Post /api/getgoals
// @access Private
const setGoals = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })
    res.json(goal)
})

// @desc update goals
// @routes  Put /api/getgoals/:id
// @access Private
const updateGoals = asyncHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,
        {new:true})
    res.json(updatedGoal)
})

// @desc delete goals
// @routes  delete /api/getgoals/:id
// @access Private
const deleteGoals = asyncHandler(async(req,res)=>{
    const trashGoal = await Goal.findByIdAndDelete(req.params.id)
    if(!trashGoal){
        res.status(400)
        throw new Error('Goal not found')
    }
    res.json({message:`delete goal ${req.params.id} goal deleted sucessfully `})
})


module.exports = {
    getGoals,setGoals,updateGoals,deleteGoals
}