import nock from 'nock'

import { getProfileById } from '../profile'

describe('getProfileById', () => {
  it('gets profile from api', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/profiles/1')
      .reply(200, { results: [{ id: 1, name: 'Mr Bloggs' }] })

    return getProfileById(1).then((profile) => {
      expect(profile.results).toHaveLength(1)
      expect(scope.isDone()).toBe(true)
    })
  })
})
