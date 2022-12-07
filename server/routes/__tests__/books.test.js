const request = require('supertest')
const server = require('../../server')

const { getBookById } = require('../../db/db.js')

jest.spyOn(console, 'error')
jest.mock('../../db/db.js')

afterEach(() => {
  console.error.mockReset()
})

const getBookByIdData = {
  id: 1,
  name: 'EDA Aihe Ahoaho 2022',
  image: 'test-image.jpg',
  theme: 'red',
  ownerId: 'authtestid1',
}
describe('get /api/v1/books/1', () => {
  it('should return status 200 and a joint table when successful', () => {
    expect.assertions(3)
    getBookById.mockReturnValue(Promise.resolve(getBookByIdData))
    return request(server)
      .get('/api/v1/books/1')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(getBookByIdData)
        expect(getBookByIdData.id).toBe(1)
      })
  })

  it('should return status 500 and an error message when database fails.', async () => {
    expect.assertions(2)
    await getBookById.mockImplementation(() =>
      Promise.reject('Something went wrong')
    )
    return request(server)
      .get('/api/v1/books/1')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
      })
  })
})

describe('POST /api/v1/comments/', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })
  it('should return status 200 and an updated table when successful', () => {
    // expect.assertions(1)
    postComment.mockImplementation(() => Promise.resolve(postData))
    return request(server)
      .post('/api/v1/comments/1/add')
      .send(postData)
      .then((res) => {
        expect(res.status).toBe(200)
      })
  })
})
