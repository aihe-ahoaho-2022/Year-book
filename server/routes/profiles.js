const express = require('express')
const path = require('path')
const checkJwt = require('../auth0.js')

const {
  addProfile,
  getProfilesByBookId,
  getProfileById,
  imageUpload,
  putProfileById,
  deleteProfile,
} = require('../db/db')

const router = express.Router()

const multer = require('multer')
// const { restart } = require('nodemon')
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

// GET /api/v1/profiles/book/:bookid
router.get('/book/:bookid', (req, res) => {
  const bookId = req.params.bookid
  getProfilesByBookId(bookId)
    .then((profiles) => res.json(profiles))
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
      console.log(pro)
      res.json({ ...profile, id: Number(profileId) })
    })
    .catch((e) => {
      console.error(e.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/add', (req, res) => {
  console.log('hit route')
  const profile = req.body
  console.log(profile)
  addProfile(profile)
    .then((profileResult) => {
      res.json(profileResult)
    })
    .catch((e) => {
      console.error(e.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// DELETE /api/v1/profiles/:id
router.delete('/:id', checkJwt, (req, res) => {
  deleteProfile(req.params.id)
    .then((result) => res.json(result))
    .catch((e) => {
      console.error(e.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
