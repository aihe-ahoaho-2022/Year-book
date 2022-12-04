import request from 'superagent'

const rootUrl = '/api/v1'

// GET /api/v1/profiles/:profileid
export function getProfileContent(profileid) {
  return request.get(rootUrl + '/profiles/' + profileid).then((res) => {
    return res.body
  })
}

// PATCH /api/v1/profiles/:profileid/edit
export function putProfileContent(profile) {
  return request
    .patch(rootUrl + '/profiles/' + profile.id + '/edit')
    .send(profile)
    .then((res) => {
      return res.body
    })
}

// addprofiles