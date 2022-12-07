/* eslint-disable jest/no-commented-out-tests */
import { getProfilesByBookId, /*removeProfile*/ } from '../../apis/profile'
import { putProfileContent } from '../../apis/profileEdit'

import { fetchProfiles, updateProfile, /*destroyProfile*/ } from '../profile'

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
// describe('deleteProfiles', () => {
//   it('dispatches the DEL_PROFILE action.', () => {
//     removeProfile.mockReturnValue(Promise.resolve(profileContentMockData))
//     return destroyProfile()(fakeDispatch).then(() => {
//       expect(fakeDispatch).toHaveBeenCalledWith({
//         type: 'DEL_PROFILE',
//         payload: profileContentMockData,
//       })
//     })
//   })
// })
