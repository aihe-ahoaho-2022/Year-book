const { getProfilesByBookId, deleteProfile } = require('../db')

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
