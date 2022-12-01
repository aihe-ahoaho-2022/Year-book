const express = require('express')
const path = require('path')

const {
  getProfilesByBookId,
  getProfileById,
  imageUpload,
  putProfileById,
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

// GET /api/v1/profiles/:profileid/edit
router.get('/:profileid/edit', (req, res) => {
  res.render('upload')
})

// POST /api/v1/profiles/:profileid/imageupload
router.post('/:profileid/imageupload', upload.single('image'), (req, res) => {
  imageUpload(req.body.image)
    .then(() => {
      res.send('image uploaded')
      res.send({ href: `/images/${req.file.filename}` })
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({
        message: 'Something went wrong',
      })
    })
})

// GET /api/v1/profiles/book/:bookid
router.get('/book/:bookid', (req, res) => {
  const bookId = Number(req.params.bookid)
  console.log(bookId)
  getProfilesByBookId(bookId)
    .then((profiles) => {
      console.log(profiles)
      res.json(profiles)
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

// GET /api/v1/profiles/:profileid
router.get('/:profileid', (req, res) => {
  const profileId = req.params.profileid
  getProfileById(profileId)
    .then((profile) => {
      res.json(profile[0])
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

// PUT /api/v1/profiles/:profileid/edit
router.patch('/:profileid/edit', (req, res) => {
  const profileId = req.params.profileid
  const profile = req.body
  putProfileById(profileId, profile)
    .then((pro) => {
      res.json(pro[0])
    })
    .catch((e) => {
      console.error(e.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
