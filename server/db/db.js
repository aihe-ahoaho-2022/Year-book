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

function getBookById(id, db = connection) {
  return db('books')
    .where('id', id)
    .select('id', 'name', 'image', 'theme', 'auth0_id as ownerId')
    .first()
}

function getCommentsByBookId(bookId, db = connection) {
  return db('comments')
    .select('id', 'book_id as bookId', 'comment', 'auth0_id as ownerId')
    .where('book_id', bookId)
}

function postComment(newComment, db = connection) {
  return db('comments').select().insert({
    id: newComment.id,
    book_id: newComment.bookId,
    comment: newComment.comment,
    auth0_id: newComment.auth0Id,
  })
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

// IMAGE UPLOAD
function imageUpload(profileId, imageName, db = connection) {
  return db('profiles').update('image', imageName).where('id', profileId)
}

function addProfile(profile, db = connection) {
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
    .insert({
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
}

module.exports = {
  getProfilesByBookId,
  getBooks,
  getBookById,
  getCommentsByBookId,
  getProfileById,
  imageUpload,
  putProfileById,
  addProfile,
  postComment,
}
