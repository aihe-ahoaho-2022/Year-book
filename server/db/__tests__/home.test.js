const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getFoods } = require('../home')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getFoods', () => {
  it('gets the food from the foods table in the database.', () => {
    expect.assertions(2)
    return getFoods(testDb).then((foods) => {
      expect(foods[0].name).toBe('Pizza')
      expect(foods).toHaveLength(4)
    })
  })
})
