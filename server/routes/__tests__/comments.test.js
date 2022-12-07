const request = require('supertest')
const server = require('../../server')

const { getCommentsByBookId, postComment } = require('../../db/db.js')
jest.spyOn(console, 'error')

jest.mock('../../db/db.js')

afterEach(() => {
  console.error.mockReset()
})

const getCommentsByBookIdData = {
  id: 1,
  book_id: 1,
  comment: 'Nice!',
  auth0_id: 'authtestid1',
}
const postData = {
  id: 1,
  bookId: 1,
  comment: 'Nice!',
  ownerId: 'authtestid1',
}

describe('get /api/v1/home/1', () => {
  it('should return status 200 and a joint table when successful', () => {
    expect.assertions(1)
    getCommentsByBookId.mockReturnValue(
      Promise.resolve(getCommentsByBookIdData)
    )
    return request(server)
      .get('/api/v1/home/1')
      .then((res) => {
        expect(res.status).toBe(200)
      })
  })
  it('should return status 500 and an error message when database fails.', () => {
    expect.assertions(3)
    getCommentsByBookId.mockImplementation(() => Promise.reject('Get Failed'))
    return request(server)
      .get('/api/v1/comments/1')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('Get Failed')
        expect(res.text).toContain('Something went wrong')
      })
  })
})
