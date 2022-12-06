// /* eslint-disable space-before-function-paren */
import request from 'superagent'

// Upload an image file
export function uploadFile(profileId, fileName) {
  console.log('filename is ' + fileName)
  console.log('profilename is ' + profileId)
  return request
    .post('/api/v1/profiles/' + profileId + '/imageupload')
    .send({ image: fileName })
    .then((res) => res.body)
}
