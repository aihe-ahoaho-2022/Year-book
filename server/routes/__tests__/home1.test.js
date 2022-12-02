const request = require('supertest')
const server = require('../../server')

const { putProfileById } = require('../../db/db.js')
jest.spyOn(console, 'error')

jest.mock('../../db/db.js')

afterEach(() => {
  console.error.mockReset()
})

const getBookByIdData = {}

it('should return status 200 and a joint table when successful', () => {
  expect.assertions(1)
  putProfileById.mockReturnValue(Promise.resolve(putProfileById))
  return request(server)
    .get('/api/v1/home/1')
    .then((res) => {
      expect(res.status).toBe(200)
      // expect(putProfileById).toHaveBeenCalledWith('1')
      // expect(res.body).toEqual(getBookByIdData)
    })
})

test.todo('dispatches fetchPlayer action')
