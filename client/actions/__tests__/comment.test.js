
import { fetchComments} from '../comment'
import { getCommentsByBookId } from '../../apis/comments'


jest.mock('../../apis/comments')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})


const resultsContentMockData = 'nothing'


describe('fetchComments', () => {
  it('dispatches the SET_COMMENTS action.', () => {
    getCommentsByBookId.mockReturnValue(Promise.resolve(resultsContentMockData))
    return fetchComments()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: 'SET_COMMENTS',
        payload: resultsContentMockData,
      })
    })
  })
  it('should console.error() if api request fails.', () => {
    expect.assertions(1)
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    getCommentsByBookId.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return fetchComments()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('Something went wrong')
    })
  })
})