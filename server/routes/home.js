const express = require('express')

const { getAnimals } = require('../db/home')

const router = express.Router()

// GET /api/v1/home/
router.get('/', (req, res) => {
  getAnimals()
    .then((animals) =>
      res.json(animals[Math.floor(Math.random() * animals.length)])
    )
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

module.exports = router
