/* eslint-disable jest/no-commented-out-tests */
import { getProfilesByBookId, removeProfile } from '../../apis/profile'
import { putProfileContent, postProfile } from '../../apis/profileEdit'

import { fetchProfiles, updateProfile, destroyProfile, submitProfile} from '../profile'

const profileContentMockData = 'nothing'




jest.mock('../../apis/profile')
jest.mock('../../apis/profileEdit')


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
describe('UpdateProfiles', () => {
  it('dispatches the UPDATE_PROFILES action.', () => {
    putProfileContent.mockReturnValue(Promise.resolve(profileContentMockData))
    return updateProfile()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: 'UPDATE_PROFILES',
        payload: profileContentMockData,
      })
    })
  })
})
describe('deleteProfiles', () => {
  it('dispatches the DEL_PROFILE action.', () => {
    removeProfile.mockReturnValue(Promise.resolve(1))
    return destroyProfile()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: 'DEL_PROFILE',
        payload: undefined,
      })
    })
  })
})
describe('submitProfile', () => {
  it('dispatches the ADD_PROFILES action.', () => {
    postProfile .mockReturnValue(Promise.resolve(profileContentMockData))
    return submitProfile()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: 'ADD_PROFILES',
        payload: profileContentMockData,
      })
    })
  })
})
