const request = require('supertest')
const server = require('../../server')
const { getRandomAnimal } = require('../../db/home')
const { homeContentMockData } = require('../../../test/fake-data')

const [homeContentMockAnimal] = homeContentMockData

jest.mock('../../db/home')

jest.spyOn(console, 'error').mockImplementation(() => {})

describe('GET /api/v1/home/', () => {
  it('should return status 200 and a animal when database is successful.', () => {
    expect.assertions(2)
    getRandomAnimal.mockReturnValue(Promise.resolve(homeContentMockAnimal))
    return request(server)
      .get('/api/v1/home/')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(homeContentMockAnimal)
      })
  })
  it('should return status 500 and an error message when database fails.', () => {
    expect.assertions(3)
    getRandomAnimal.mockImplementation(() =>
      Promise.reject(new Error('This no worky'))
    )
    return request(server)
      .get('/api/v1/home/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
        expect(console.error).toHaveBeenCalledWith('This no worky')
      })
  })
})
