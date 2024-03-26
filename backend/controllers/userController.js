const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Register new User
// @routes  POST /api/users/
// @access public


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    //check user already exits
    const existingUser = await User.findOne({ email })
    if (existingUser) {
        res.status(400)
        throw new Error('User already exists')
    }
    //Hash password 
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    //create user
    const user = await User.create({
        name,
        email,
        password: hashPassword,

    })
    console.log(user)
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }


})

// @desc Login a user
// @routes  POST /api/users/login
// @access public


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    //Check for user email
    const user = await User.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})


// @desc Get user data
// @routes  GET /api/users/me
// @access Private

const getMe = asyncHandler(async (req, res) => {
 const {_id,name,email} = await User.findById(req.user.id)
 res.status(200).json({
    id:_id,
    name,email
 })  
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECERT, {
        expiresIn: '30d',
    })
}


module.exports = {
    registerUser,
    loginUser, getMe
}