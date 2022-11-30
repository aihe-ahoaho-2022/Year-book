const connection = require('./connection')

function getProfilesByBookId(bookId, db = connection) {
  return db('profiles')
    .select(
      'id',
      'book_id as bookId',
      'name',
      'image',
      'auth0_id as ownerId',
      'quote',
      'blurb',
      'linkedin_url as linkedinUrl',
      'twitter_url as twitterUrl',
      'instagram_url as instagramUrl',
      'facebook_url as facebookUrl',
      'github_url as githubUrl'
    )
    .where('bookId', bookId)
}

function getBooks(db = connection) {
  return db('books').select(
    'id',
    'name',
    'image',
    'theme',
    'auth0_id as ownerId'
  )
}

function getCommentsByBookId(bookId, db = connection) {
  return db('comments')
    .select('id', 'book_id as bookId', 'comment', 'auth0_id as ownerId')
    .where('id', bookId)
}

function getProfileById(profileId, db = connection) {
  return db('profiles')
    .select(
      'id',
      'book_id as bookId',
      'name',
      'image',
      'auth0_id as ownerId',
      'quote',
      'blurb',
      'linkedin_url as linkedinUrl',
      'twitter_url as twitterUrl',
      'instagram_url as instagramUrl',
      'facebook_url as facebookUrl',
      'github_url as githubUrl'
    )
    .where('id', profileId)
}

module.exports = {
  getProfilesByBookId,
  getBooks,
  getCommentsByBookId,
  getProfileById,
}
