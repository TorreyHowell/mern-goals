const express = require('express')
const router = express.Router()
const users = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', users.registerUser)
router.post('/login', users.loginUser)
router.get('/me', protect, users.getMe)

module.exports = router
