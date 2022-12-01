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
    .where('book_id', bookId)
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

function putProfileById(profileId, profile, db = connection) {
  return db('profiles')
    .update({
      id: profile.id,
      book_id: profile.bookId,
      name: profile.name,
      image: profile.image,
      auth0_id: profile.ownerId,
      quote: profile.quote,
      blurb: profile.blurb,
      linkedin_url: profile.linkedinUrl,
      twitter_url: profile.twitterUrl,
      instagram_url: profile.instagramUrl,
      facebook_url: profile.facebookUrl,
      github_url: profile.githubUrl,
    })
    .where('id', profileId)
}

//// IMAGE UPLOAD DB TRIAL
function imageUpload(image, db = connection) {
  return db('profiles').insert(image)
}

module.exports = {
  getProfilesByBookId,
  getBooks,
  getCommentsByBookId,
  getProfileById,
  imageUpload,
  putProfileById,
}
