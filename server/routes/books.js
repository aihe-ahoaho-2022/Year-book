const express = require('express')

const { getBooks, getBookById } = require('../db/db')

const router = express.Router()

// GET /api/v1/books
router.get('/', (req, res) => {
  getBooks()
    .then((books) => res.json(books))
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

// GET /api/v1/books/:bookid
router.get('/:bookid', (req, res) => {
  const bookId = req.params.bookid
  getBookById(bookId)
    .then((book) => {
      res.json(book)
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

module.exports = router
