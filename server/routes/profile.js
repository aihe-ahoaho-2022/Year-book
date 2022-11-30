const express = require('express')
const path = require('path')

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

//// IMAGE UPLOAD ROUTE TRIAL

router.get('/imageupload', (req, res) => {
  res.render('upload')
})

router.post('/imageupload', upload.single('image'), (req, res) => {
  imageUpload(req.body)
    .then(() => {
      // return getProfilesByBookId()
      res.send('image uploaded')
    })
    // .then((profiles) => {
    //   res.json(profiles)
    // })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({
        message: 'Something went wrong',
      })
    })
})

module.exports = router
