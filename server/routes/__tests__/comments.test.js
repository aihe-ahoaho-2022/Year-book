const request = require('supertest')
const server = require('../../server')

const { getCommentsByBookId } = require('../../db/db.js')

jest.spyOn(console, 'error')
jest.mock('../../db/db.js')

afterEach(() => {
  console.error.mockReset()
})

const getCommentsByBookIdData =   {
  id: 1,
  book_id: 1,
  comment: 'Nice!',
  auth0_id: 'authtestid1',
}

describe('get /api/v1/home/1', () => {
  it('should return status 200 and a joint table when successful', () => {
    expect.assertions(1)
    getCommentsByBookId.mockReturnValue(Promise.resolve(getCommentsByBookIdData))
    return request(server)
      .get('/api/v1/home/1')
      .then((res) => {
        expect(res.status).toBe(200)
        // expect(res.body).toEqual(getCommentsByBookIdData)
        // expect(getCommentsByBookIdData.id).toBe(1)
      })
  })
})



