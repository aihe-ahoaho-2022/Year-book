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
function addBook(newBook, db = connection) {
  return db('books').select().insert({
    id: newBook.id,
    name: newBook.name,
    image:
      'https://media.istockphoto.com/id/1224449402/vector/vintage-school-yearbook-cover-vector-layered.jpg?s=612x612&w=0&k=20&c=NSjbIwYxTWDkrVpCLMLWTHyF283ZO4VbYSk_yJoHGVE=',
    auth0_id: newBook.addBook,
  })
}

function putBookById(bookId, book, db = connection) {
  return db('books')
    .update({
      id: book.id,
      name: book.name,
      image: book.image,
      auth0_id: book.ownerId,
    })
    .where('id', bookId)
}

function deleteBook(id, db = connection) {
  return db('books').where('id', id).del()
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
    auth0_id: newComment.ownerId,
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

// PROFILE IMAGE UPLOAD
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
      image:
        'https://www.pianz.org.nz/wp-content/uploads/2016/03/pekin-duck.jpg',
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

function deleteProfile(id, db = connection) {
  return db('profiles').where({ id }).del()
}

// BOOK IMAGE UPLOAD
function bookImageUpload(bookId, imageName, db = connection) {
  return db('books').update('image', imageName).where('id', bookId)
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
  deleteProfile,
  postComment,
  addBook,
  putBookById,
  deleteBook,
  bookImageUpload,
}
