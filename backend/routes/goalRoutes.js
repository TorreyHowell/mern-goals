const express = require('express')
const router = express.Router()
const goals = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, goals.getGoals).post(protect, goals.setGoal)

router
  .route('/:id')
  .delete(protect, goals.deleteGoal)
  .put(protect, goals.updateGoal)

module.exports = router
