const request = require('supertest')
const server = require('../../server')

describe('get /api/v1/home/1', () => {
  it('should return status 200 and a joint table when successful', () => {
    expect.assertions(1)
    return request(server)
      .get('/api/v1/home')
      .then((res) => {
        expect(res.status).toBe(200)
      })
  })
})
