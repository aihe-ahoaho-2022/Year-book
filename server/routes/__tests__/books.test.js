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

it('should return status 200 and a joint table when successful', () => {
  expect.assertions(2)
  getBookById.mockReturnValue(Promise.resolve(getBookByIdData))

  return request(server)
    .get('/api/v1/books/1')
    .then((res) => {
      expect(res.status).toBe(200)
      expect(res.body).toEqual(getBookByIdData)
    })
})

test.todo('dispatches fetchPlayer action')
