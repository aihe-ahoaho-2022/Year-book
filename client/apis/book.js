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
export function deleteBookById(id, token) {
  return request
    .del(rootUrl + '/books/' + id + '/delete')
    .set('Authorization', `Bearer ${token}`)
    .then((res) => {
      return res.body
    })
}

// PATCH /api/v1/books/:bookid/edit
export function editBook(book, token) {
  return request
    .patch(rootUrl + '/books/' + book.id + '/edit')
    .set('Authorization', `Bearer ${token}`)
    .send(book)
    .then((res) => {
      return res.body
    })
}

// POST /api/v1/books/add
export function postBook(bookData, token) {
  return request
    .post(rootUrl + '/books/add/')
    .set('Authorization', `Bearer ${token}`)
    .send(bookData)
    .then((res) => {
      return res.body
    })
}

// POST Upload a book image file
export function uploadBookFile(bookid, formData) {
  console.log('upload book file api hit')
  return request
    .post(rootUrl + '/books/' + bookid + '/imageupload')
    .send(formData)
    .then((res) => res.body)
}
