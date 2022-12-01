import request from 'superagent'

const rootUrl = '/api/v1'

//GET /api/v1/comments/:bookid
export function getCommentsByBookId(id) {
  return request.get(rootUrl + '/comments/' + { id }).then((res) => {
    return res.body
  })
}
