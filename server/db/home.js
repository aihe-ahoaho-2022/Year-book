const connection = require('./connection')

function getFoods(db = connection) {
  return db('foods').select(
    'id',
    'uploader_id as uploaderId',
    'name',
    'description',
    'image_url as imageUrl'
  )
}

module.exports = { getFoods }
