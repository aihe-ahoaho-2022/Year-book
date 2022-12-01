import request from 'superagent'

const rootUrl = '/api/v1'

// GET /api/v1/home
export function getHomeContent() {
  return request.get(rootUrl + '/books/:bookId/profiles/:profileId').then((res) => {
    return res.body
  })
}

// GET /api/v1/books
export function getBooks() {
  return request.get(rootUrl + '/books').then((res) => {
    return res.body
  })
}

// GET /api/v1/books/:bookId
export function getBookById(id) {
  return request.get(rootUrl + '/books/' + { id }).then((res) => {
    return res.body
  })
}

// GET /api/v1/profiles/:profileId
export function getProfileById(id) {
  return request.get(rootUrl + '/profiles/' + { id }).then((res) => {
    return res.body
  })
}

// GET /api/v1/books/:bookId/profiles

export function getProfilesByBookId(id) {
  return request.get(rootUrl + '/books/' + { id } + '/profiles').then((res) => {
    return res.body
  })
}

//GET /api/v1/books/:bookId/comments

export function getCommentsByBookId(id) {
  return request.get(rootUrl + '/books/' + { id } + '/comments').then((res) => {
    return res.body
  })
}
