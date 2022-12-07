const {
  getProfilesByBookId,
  getBooks,
  getBookById,
  deleteBook,
  addBook,
  putBookById,
  getCommentsByBookId,
  deleteProfile,
  getProfileById,
  addProfile,
  putProfileById,
  postComment,
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
      expect(profile).toHaveLength(2)
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
describe('deleteBook', () => {
  it('deletes book from db', () => {
    const id = 2
    return deleteBook(id, testDb)
      .then(() => {
        return getBooks(testDb)
      })
      .then((books) => {
        expect(books).toHaveLength(3)
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
        expect(profiles).toHaveLength(2)
      })
  })
})
describe('getProfileById', () => {
  it('get profile data by profileID', () => {
    const profileId = 2
    return getProfileById(profileId, testDb).then((profile) => {
      expect(profile).toHaveLength(1)
      expect(profile[0].name).toContain('Rohan')
    })
  })
})

describe('add profile to the database', () => {
  it('add profile back to database', () => {
    const mockProfile = {
      id: 20,
      bookId: 1,
      name: 'Banana',
      image: '',
      ownerId: '',
      quote: ``,
      blurb: '',
      linkedinUrl: '',
      twitterUrl: '',
      instagramUrl: '',
      facebookUrl: '',
      githubUrl: 'https://github.com/jatin-puri-coder',
    }
    return addProfile(mockProfile, testDb).then((profile) => {
      expect(profile).toHaveLength(1)
      expect(profile[0]).toBe(20)
    })
  })
})

describe('add comments to the database', () => {
  it('add profile back to database', () => {
    const mockComments = {
      bookId: 1,
      comment: 'Great',
      ownerId: 'authtestid1',
    }
    return postComment(mockComments, testDb).then((id) => {
      expect(id[0]).toBe(9)
    })
  })
})

describe('add book to the database', () => {
  it('add book back to database', () => {
    const mockBook = {
      name: 'EDA Aihe Ahoaho 2022',
      image: '/images/ahoaho-book.png',
      theme: 'red',
      auth0_id: 'authtestid1',
    }

    return addBook(mockBook, testDb).then((id) => {
      expect(id[0]).toBe(5)
    })
  })
})

describe('update profiles by id to the database', () => {
  it('update profiles by id database', () => {
    const mockProfile = {
      id: 5,
      bookId: 1,
      name: 'Banana',
      image: '',
      ownerId: '',
      quote: ``,
      blurb: '',
      linkedinUrl: '',
      twitterUrl: '',
      instagramUrl: '',
      facebookUrl: '',
      githubUrl: 'https://github.com/jatin-puri-coder',
    }

    return putProfileById(mockProfile.id, mockProfile, testDb).then(() => {
      return getProfileById(mockProfile.id, testDb).then((profile) => {
        expect(profile).toHaveLength(1)
        expect(profile[0].name).toContain('Banana')
      })
    })
  })
})

describe('update book by id to the database', () => {
  it('update book by id database', () => {
    const mockBook = {
      id: 4,
      name: 'updated value',
      image: '/images/dog-warts-book.png',
      theme: 'purple',
      auth0_id: 'authtestid4',
    }

    return putBookById(mockBook.id, mockBook, testDb).then(() => {
      return getBookById(mockBook.id, testDb).then((book) => {
        console.log(book)
        expect(book.name).toContain('updated value')
      })
    })
  })
})
