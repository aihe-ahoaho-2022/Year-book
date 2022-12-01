const express = require('express')

const { getProfilesByBookId, getProfileById } = require('../db/db')

const router = express.Router()

// GET /api/v1/profiles/book/:bookId
router.get('/book/:bookId', (req, res) => {
  const bookId = req.params.bookId
  getProfilesByBookId(bookId)
    .then((profiles) => res.json(profiles))
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

// GET /api/v1/profiles/:profileId
router.get('/:profileId', (req, res) => {
  const profileId = req.params.profileId
  getProfileById(profileId)
    .then((profile) => {
      res.json(profile[0])
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

module.exports = router
