const request = require('supertest')
const server = require('../../server')

const { getFoods } = require('../../db/home')
jest.mock('../../db/home')

const getFoodsMockData = [
  {
    id: 1,
    uploader_id: '1',
    name: 'Pizza',
    description: 'Delicious margarita pizza',
    image_url: '/images/pizza.jpg',
  },
  {
    id: 2,
    uploader_id: '1',
    name: 'Toast',
    description: 'Perfectly toasted eggy bread',
    image_url: '/images/pizza.jpg',
  },
]

describe('GET /api/v1/home/', () => {
  it('should return status 200 and a food when database is successful.', () => {
    expect.assertions(2)
    getFoods.mockReturnValue(Promise.resolve(getFoodsMockData))
    return request(server)
      .get('/api/v1/home/')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(getFoodsMockData).toContainEqual(res.body)
      })
  })
  it('should return status 500 and an error message when database fails.', () => {
    expect.assertions(2)
    getFoods.mockImplementation(() =>
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
