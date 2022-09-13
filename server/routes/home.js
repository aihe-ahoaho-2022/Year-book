const express = require('express')

const { getFoods } = require('../db/home')

const router = express.Router()

// GET /api/v1/home/
router.get('/', (req, res) => {
  getFoods()
    .then((foods) => res.json(foods[Math.floor(Math.random() * foods.length)]))
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

module.exports = router
