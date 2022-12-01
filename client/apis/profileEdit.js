import request from 'superagent'

const rootUrl = '/api/v1'


// GET /:bookid/:profileid/edit
export function getHomeContent() {
  return request.get(rootUrl + '/:bookid/:profileid/edit').then((res) => {
    return res.body
  })
}
