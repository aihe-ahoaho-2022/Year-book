const express = require('express')
const checkJwt = require('../auth0.js')

const {
  getBooks,
  addBook,
  putBookById,
  deleteBook,
  getBookById,
} = require('../db/db')

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

// POST /api/v1/books/add
router.post('/add', checkJwt, (req, res) => {
  const newBook = req.body
  addBook(newBook)
    .then((newBookData) => res.json(newBookData))
    .catch((e) => {
      console.error(e.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// PATCH /api/v1/books/:bookid/edit
router.patch('/:bookid/edit', checkJwt, (req, res) => {
  const bookId = req.params.bookid
  const book = req.body
  putBookById(bookId, book)
    .then((pro) => {
      console.log(pro)
      res.json(pro[0])
    })
    .catch((e) => {
      console.error(e.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// DELETE /api/v1/books/:bookid/delete/
router.delete('/:bookid/delete', checkJwt, (req, res) => {
  deleteBook(req.params.bookid)
    .then((result) => res.json(result))
    .catch((e) => {
      console.error(e.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
