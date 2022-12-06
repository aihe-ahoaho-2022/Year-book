const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getBooks } = require('../db')


beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getRandomBook', () => {
  it('gets books from the book table in the database.', () => {
    expect.assertions(1)
    return getBooks(testDb).then((book) => {
      expect(Object.keys(book)).toHaveLength(4)
    })
  })
})
