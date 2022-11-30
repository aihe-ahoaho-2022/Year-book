const express = require('express')
const path = require('path')

const {
  getCommentsByBookId,
  getBooks,
  getProfilesByBookId,
} = require('../db/db')

const router = express.Router()

// GET /api/v1/books
router.get('/books', (req, res) => {
  getBooks()
    .then((books) => res.json(books))
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

// GET /api/v1/books/:bookId
router.get('/books/:bookId', (req, res) => {
  const bookId = req.params.bookId
  getBooks()
    .then((books) => {
      const book = books.find((book) => book.id == bookId)
      res.json(book)
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

// GET /api/v1/books/:bookId/profiles
router.get('/books/:bookId/profiles', (req, res) => {
  const bookId = req.params.bookId
  getProfilesByBookId(bookId)
    .then((profiles) => res.json(profiles))
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

// GET /api/v1/books/:bookId/profiles
router.get('/books/:bookId/profiles/:profileId', (req, res) => {
  const bookId = req.params.bookId
  const profileId = req.params.profileId
  getProfilesByBookId(bookId)
    .then((profiles) => {
      const profile = profiles.find((profile) => profile.id == profileId)
      res.json(profile)
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

router.get('/books/:bookId/comments', (req, res) => {
  const bookId = req.params.bookId
  getCommentsByBookId(bookId)
    .then((comments) => res.json(comments))
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

module.exports = router
