const express = require('express')
const router = express.Router()
const goals = require('../controllers/goalController')

router.route('/').get(goals.getGoals).post(goals.setGoal)

router.route('/:id').delete(goals.deleteGoal).put(goals.updateGoal)

module.exports = router
