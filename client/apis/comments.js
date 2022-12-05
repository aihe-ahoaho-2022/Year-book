import request from 'superagent'

const rootUrl = '/api/v1'

//GET /api/v1/comments/:bookid
export function getCommentsByBookId(id) {
  return request.get(rootUrl + '/comments/' + id).then((res) => {
    return res.body
  })
}

export function postComment(newComment, token) {
  return request
    .post(rootUrl + '/comments/' + newComment.bookId + '/add/')
    .set('Authorization', `Bearer ${token}`)
    .send(newComment)
    .then((res) => {
      return res.body
    })
}
