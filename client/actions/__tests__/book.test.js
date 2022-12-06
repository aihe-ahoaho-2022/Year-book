import {fetchBook } from '../book'
import {getBookById } from '../../apis/book'

const homeContentMockData = ['jhfhjfyjfjhfhj','f']

jest.mock('../../apis/book')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

describe('fetchBook', () => {
  it('dispatches the SET_BOOKS action.', () => {
    getBookById.mockReturnValue(Promise.resolve(homeContentMockData))
    return fetchBook()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: 'SET_BOOKS',
        payload: homeContentMockData,
      })
    })
  })
  it('should console.error() if api request fails.', () => {
    expect.assertions(2)
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    getBookById.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    ) 
    return fetchBook()(fakeDispatch).finally(() => {
      expect(fakeDispatch).toHaveBeenCalledTimes(0)
      expect(console.error).toHaveBeenCalledWith('Something went wrong')
    })
  })
})