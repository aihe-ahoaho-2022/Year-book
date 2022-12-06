import request from 'superagent'

// Upload a profile image file
export function uploadFile(profileId, formData) {
  return request
    .post('/api/v1/profiles/' + profileId + '/imageupload')
    .send(formData)
    .then((res) => res.body)
}
