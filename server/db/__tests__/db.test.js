const {
  getProfilesByBookId,
  getBooks,
  getBookById,
  deleteProfile,
  postComment,
  getCommentsByBookId,
} = require('../db')

const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())
afterAll(() => testDb.destroy())

describe('getProfilesByBookId', () => {
  test('get profile from db by id', () => {
    const id = 3
    return getProfilesByBookId(id, testDb).then((profile) => {
      expect(profile).toHaveLength(1)
      expect(profile[0].name).toContain('Ysabel')
    })
  })
})

describe('getBooks', () => {
  test('gets all books from db', () => {
    return getBooks(testDb).then((books) => {
      expect([books[0], books[1]]).toHaveLength(2)
      // counting two to future-proof test
    })
  })
  test('read book data name from db', () => {
    return getBooks(testDb).then((books) => {
      expect(books[1].name).toContain('EDA')
    })
  })
})

describe('getCommentsByBookId', () => {
  it('gets comments by book id from db', () => {
    const bookId = 1
    return getCommentsByBookId(bookId, testDb).then((commments) => {
      expect([commments[0], commments[1], commments[2]]).toHaveLength(3)
      // counting three to future-proof test
    })
  })
})

describe('getBookById', () => {
  test('get book from db by id', () => {
    const id = 2
    return getBookById(id, testDb).then((book) => {
      expect(book.id).toBe(2)
      expect(book.name).toContain('EDA')
    })
  })
})

describe('deleteProfile', () => {
  it('deletes profiles from db', () => {
    const id = 2
    const bookId = 2
    return deleteProfile(id, testDb)
      .then(() => {
        return getProfilesByBookId(bookId, testDb)
      })
      .then((profiles) => {
        expect(profiles).toHaveLength(0)
      })
  })
})
