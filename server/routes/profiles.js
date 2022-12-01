const express = require('express')
const path = require('path')

const { getProfilesByBookId, getProfileById } = require('../db/db')
const { imageUpload } = require('../db/db')

const router = express.Router()

const multer = require('multer')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/images'))
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
  },
})

const upload = multer({ storage: storage })

// GET /api/v1/profiles/:profileId/edit
router.get('/:profileId/edit', (req, res) => {
  res.render('upload')
})

// POST /api/v1/profiles/:profileId/edit
router.post('/:profileId/edit', upload.single('image'), (req, res) => {
  imageUpload(req.body.image)
    .then(() => {
      res.send('image uploaded')
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({
        message: 'Something went wrong',
      })
    })
})

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
