const connection = require('./connection')

function getAnimals(db = connection) {
  return db('animals').select(
    'id',
    'auth0_id as uploaderId',
    'name',
    'description',
    'image_url as imageUrl'
  )
}

module.exports = { getAnimals }
