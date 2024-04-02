const express = require('express')
const router = express.Router()
const { registerAdmin, adminLogin,getUserData } = require('../controllers/adminControllers')
const { authAdmin } = require('../middleware/adminAuthMiddleware')





router.post('/', adminLogin)
router.post('/register', registerAdmin)
router.get('/dashboard',authAdmin,getUserData)










module.exports = router