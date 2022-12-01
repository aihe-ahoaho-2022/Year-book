const express = require('express')

const router = express.Router()

const { putProfileById } = require('../db/db')

// PUT /api/v1/profiles/:profileId
router.patch('/profiles/:profileId', (req, res) => {
  const profileId = req.params.profileId
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
