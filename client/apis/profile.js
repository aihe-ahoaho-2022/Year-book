import request from 'superagent'

const rootUrl = '/api/v1'

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
