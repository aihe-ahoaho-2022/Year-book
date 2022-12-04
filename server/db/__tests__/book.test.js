const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getBooks } = require('../db')

// const mockbookySeedData = [
//   {
//     id: 1,
//     name: 'EDA Aihe Ahoaho 2022',
//     image: 'test-image.jpg',
//     theme: 'red',
//     auth0_id: 'authtestid1',
//   },
//   {
//     id: 2,
//     name: 'EDA Aihe Popoto 2022',
//     image: 'test-image.jpg',
//     theme: 'blue',
//     auth0_id: 'authtestid2',
//   },
//   {
//     id: 3,
//     name: 'Dog Agility Class 22',
//     image: 'test-image.jpg',
//     theme: 'green',
//     auth0_id: 'authtestid3',
//   },
//   {
//     id: 4,
//     name: 'Dogwarts Academy',
//     image: 'test-image.jpg',
//     theme: 'purple',
//     auth0_id: 'authtestid4',
//   },
// ]

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
      // expect(mockbookySeedData).toContain(book)
      expect(Object.keys(book)).toHaveLength(4)
    })
  })
})
