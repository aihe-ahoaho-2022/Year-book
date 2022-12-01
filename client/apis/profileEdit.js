import request from 'superagent'

const rootUrl = '/api/v1'

// GET /profile/:profileid
export function getProfileContent(profileid) {
  return request.get(rootUrl + '/profiles/' + profileid).then((res) => {
    return res.body
  })
}

// PATCH /profile/:profileid
export function putProfileContent(profile) {
  return request
    .patch(rootUrl + '/profiles/' + profile.id)
    .send(profile)
    .then((res) => {
      return res.body
    })
}
