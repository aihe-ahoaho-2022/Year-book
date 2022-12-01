const express = require('express')

const { getCommentsByBookId } = require('../db/db')

const router = express.Router()

// GET /api/v1/comments/:bookId
router.get('/:bookId', (req, res) => {
  const bookId = req.params.bookId
  getCommentsByBookId(bookId)
    .then((comments) => res.json(comments))
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

module.exports = router
