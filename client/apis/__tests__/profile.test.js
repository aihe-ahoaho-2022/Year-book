import nock from 'nock'

import { getProfileById, getProfilesByBookId } from '../profile'

describe('getProfileById', () => {
  it('gets profile from api', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/profiles/4')
      .reply(200, {
        results: [{ id: 5, name: 'Mr Bloggs' }],
      })
    return getProfileById(4).then((profile) => {
      expect(profile.results).toHaveLength(1)
      expect(profile.results[0].name).toContain('Mr Bloggs')
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('getProfilesByBookId', () => {
  it('gets profile from api', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/profiles/book/3')
      .reply(200, {
        results: [
          { id: 5, bookId: 3, name: 'Mr Bloggs' },
          { id: 7, bookId: 3, name: 'Mrs Bloggs' },
        ],
      })
    return getProfilesByBookId(3).then((profile) => {
      expect(profile.results).toHaveLength(2)
      expect(profile.results[1].name).not.toContain('Mr Bloggs')
      expect(scope.isDone()).toBe(true)
    })
  })
})

// describe('removeProfile', () => {
//   it('removes profile from api', () => {
//     const scope = nock('http://localhost')
//       .get('/api/v1/profiles/delete/3')
//       .reply(200, {
//         results: [
//           { id: 3, name: 'Mr Bloggs' },
//           { id: 6, name: 'Mrs Bloggs' },
//         ],
//       })
//     return removeProfile(3).then((profile) => {
//       expect(profile.results).toHaveLength(1)
//       expect(scope.isDone()).toBe(true)
//     })
//   })
// })
