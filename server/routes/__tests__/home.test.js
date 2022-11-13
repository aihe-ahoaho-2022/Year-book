const request = require('supertest')
const server = require('../../server')

const { getAnimals } = require('../../db/home')
jest.mock('../../db/home')

const getAnimalsMockData = [
  {
    id: 1,
    auth0_id: '1',
    name: 'Bag Cat',
    description: 'Likes bags',
    image_url: '/images/bag-cat.jpg',
  },
  {
    id: 2,
    auth0_id: '1',
    name: 'Mug Pup',
    description: 'Lives in mugs',
    image_url: '/images/mug-pup.jpg',
  },
]

describe('GET /api/v1/home/', () => {
  it('should return status 200 and a animal when database is successful.', () => {
    expect.assertions(2)
    getAnimals.mockReturnValue(Promise.resolve(getAnimalsMockData))
    return request(server)
      .get('/api/v1/home/')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(getAnimalsMockData).toContainEqual(res.body)
      })
  })
  it('should return status 500 and an error message when database fails.', () => {
    expect.assertions(2)
    getAnimals.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return request(server)
      .get('/api/v1/home/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
      })
  })
})
