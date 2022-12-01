/* eslint-disable space-before-function-paren */
import request from 'superagent'

const profile = '/api/v1/profile'

// Upload an image file
export function uploadFile(file) {
  console.log(file)
  return request
    .post(profile)
    .attach('profile-image', file)
    .then((res) => res.body)
}
