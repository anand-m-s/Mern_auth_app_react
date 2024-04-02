const asyncHandler = require('express-async-handler')
const { generateToken } = require('../utils/generateToken')
const Admin = require('../models/adminModel')
const User = require('../models/userModel')


const registerAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const admin = await Admin.create({
        email,
        password
    })
    res.status(200).json(admin)
})

const adminLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const admin = await Admin.findOne({ email })
  
    if (admin && admin.matchPassword(password)) {
        res.status(200).json({
            _id: admin.id,
            email: admin.email,
            token: generateToken(admin.id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid username or password')
    }
})

const getUserData = asyncHandler(async(req,res)=>{
    const user = await User.find({})
    if(user){
        res.status(200).json(user)
    }else{
        res.status(401)
        throw new Error('Cant fetch data from data base')
    }
})

module.exports = {
    registerAdmin,adminLogin,getUserData
}