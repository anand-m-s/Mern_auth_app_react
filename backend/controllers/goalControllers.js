const asyncHandler = require('express-async-handler')


// @desc getgoals
// @routes  Get /api/getgoals
// @access Private
const getGoals = asyncHandler(async(req,res)=>{
    res.json({message:"Get Goals........."})
})

// @desc Set Goals
// @routes  Post /api/getgoals
// @access Private
const setGoals = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    res.json({message:"set Goals"})
})

// @desc update goals
// @routes  Put /api/getgoals/:id
// @access Private
const updateGoals = asyncHandler(async(req,res)=>{
    res.json({message:`update goal ${req.params.id}`})
})

// @desc delete goals
// @routes  delete /api/getgoals/:id
// @access Private
const deleteGoals = asyncHandler(async(req,res)=>{
    res.json({message:`delete goal ${req.params.id}`})
})


module.exports = {
    getGoals,setGoals,updateGoals,deleteGoals
}