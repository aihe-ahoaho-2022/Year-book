// import { fetchHomeContent, SET_HOME_CONTENT } from '../home'
// import { getHomeContent } from '../../apis/home'

// jest.mock('../../apis/home')

// const fakeDispatch = jest.fn()

// beforeEach(() => {
//   jest.clearAllMocks()
// })

// const homeContentMockData = {
//   captionId: 2,
//   captionText: 'mockCaptionText',
//   imageId: 2,
//   imageUrl: 'mockImageUrl',
// }

// describe('fetchHomeContent', () => {
//   it('dispatches the SET_HOME_CONTENT action.', () => {
//     getHomeContent.mockReturnValue(Promise.resolve(homeContentMockData))
//     return fetchHomeContent()(fakeDispatch).then(() => {
//       expect(fakeDispatch).toHaveBeenCalledWith({
//         type: SET_HOME_CONTENT,
//         payload: homeContentMockData,
//       })
//     })
//   })
//   it('should console.error() if api request fails.', () => {
//     expect.assertions(1)
//     jest.spyOn(console, 'error')
//     console.error.mockImplementation(() => {})
//     getHomeContent.mockImplementation(() =>
//       Promise.reject(new Error('Something went wrong'))
//     )
//     return fetchHomeContent()(fakeDispatch).then(() => {
//       expect(console.error).toHaveBeenCalledWith('Something went wrong')
//     })
//   })
// })
