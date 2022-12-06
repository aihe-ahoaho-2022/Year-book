import { getProfilesByBookId } from '../../apis/profile'
import { fetchProfiles } from '../profile'

const profileContentMockData = 'nothing'

jest.mock('../../apis/profile')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

describe('fetchProfiles', () => {
  it('dispatches the SET_PROFILES action.', () => {
    getProfilesByBookId.mockReturnValue(Promise.resolve(profileContentMockData))
  return fetchProfiles()(fakeDispatch).then(() => {
    expect(fakeDispatch).toHaveBeenCalledWith({
      type: 'SET_PROFILES',
      payload: profileContentMockData,
    })
  })
    
  })
})