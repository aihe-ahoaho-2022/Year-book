import request from 'superagent'

const rootUrl = '/api/v1'

// GET /api/v1/home
export function getHomeContent() {
  return request.get(rootUrl + '/books/:bookId/profiles/:profileId').then((res) => {
    return res.body
  })
}
