const express = require('express')
const path = require('path')
const checkJwt = require('../auth0.js')

const {
  getBooks,
  addBook,
  putBookById,
  deleteBook,
  getBookById,
  imageUpload,
} = require('../db/db')

const router = express.Router()

const multer = require('multer')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/images'))
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, Date.now() + '-' + file.originalname)
  },
})

const upload = multer({ storage: storage })

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

// POST /api/v1/books/:bookid/imageupload
router.post('/:bookid/imageupload', upload.single('image'), (req, res) => {
  let imageUrl = null
  if (!req.file) {
    imageUrl = '/images/bag-cat.jpg'
  } else {
    imageUrl = '/images/' + req.file.filename
  }

  const profileId = req.params.profileid
  imageUpload(profileId, imageUrl)
    .then(() => {
      console.log(req.body)
      res.send('image uploaded')
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({
        message: 'Something went wrong',
      })
    })
})

module.exports = router
