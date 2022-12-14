const express = require('express')
const checkJwt = require('../auth0.js')

const { getCommentsByBookId, postComment } = require('../db/db')

const router = express.Router()

// GET /api/v1/comments/:bookid
router.get('/:bookid', (req, res) => {
  const bookId = req.params.bookid
  getCommentsByBookId(bookId)
    .then((comments) => res.json(comments))
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/:bookid/add', checkJwt, (req, res) => {
  const bookComment = { ...req.body, bookId: req.params.bookid }
  postComment(bookComment)
    .then((newComment) => res.json(newComment))
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
