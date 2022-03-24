const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe, updateUsername, updatePassword } = require('../controllers/userController')
const protect = require('../middleware/authMiddleware')
  
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.put('/update/name/:id', protect, updateUsername)
router.put('/update/password/:id', protect, updatePassword)

module.exports = router;