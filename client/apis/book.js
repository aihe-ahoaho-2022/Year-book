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
  return request.get(rootUrl + '/books/' + id).then((res) => {
    return res.body
  })
}
// DELETE /api/v1/books/:bookid
export function deleteBookById(id) {
  return request.get(rootUrl + '/books/' + id + '/delete').then((res) => {
    return res.body
  })
}

// PATCH /api/v1/books/:bookid/edit
export function editBook(book) {
  return request
    .patch(rootUrl + '/books/' + book.id + '/edit')
    .send(book)
    .then((res) => {
      return res.body
    })
}

// POST /api/v1/books/add
export function postBook(bookData) {
  return request
    .post(rootUrl + '/books/add/')
    .send(bookData)
    .then((res) => {
      return res.body
    })
}
