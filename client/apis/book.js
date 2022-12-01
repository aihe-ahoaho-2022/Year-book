import request from 'superagent'

const rootUrl = '/api/v1'

// GET /api/v1/books
export function getBooks() {
  return request.get(rootUrl + '/books').then((res) => {
    return res.body
  })
}

// GET /api/v1/books/:bookid
export function getBookById(id) {
  return request.get(rootUrl + '/books/' + { id }).then((res) => {
    return res.body
  })
}
