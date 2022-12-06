import { fetchBook, updateBook, submitBook, deleteBooks } from '../book'
import {
  getBookById,
  postBook,
  editBook,
  deleteBookById,
} from '../../apis/book'

const homeContentMockData = ['jhfhjfyjfjhfhj', 'f']

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

describe('submitBook', () => {
  it('dispatches the ADD_BOOKS action.', () => {
    postBook.mockReturnValue(Promise.resolve(homeContentMockData))
    return submitBook()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: 'ADD_BOOKS',
        payload: homeContentMockData,
      })
    })
  })
  it('should console.error() if api request fails.', () => {
    expect.assertions(2)
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    postBook.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return submitBook()(fakeDispatch).finally(() => {
      expect(fakeDispatch).toHaveBeenCalledTimes(0)
      expect(console.error).toHaveBeenCalledWith('Something went wrong')
    })
  })
})

describe('updateBook', () => {
  it('dispatches the UPDATE_BOOKS action.', () => {
    editBook.mockReturnValue(Promise.resolve(homeContentMockData))
    return updateBook()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: 'UPDATE_BOOKS',
        payload: homeContentMockData,
      })
    })
  })
  it('should console.error() if api request fails.', () => {
    expect.assertions(2)
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    editBook.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return updateBook()(fakeDispatch).finally(() => {
      expect(fakeDispatch).toHaveBeenCalledTimes(0)
      expect(console.error).toHaveBeenCalledWith('Something went wrong')
    })
  })
})

// describe('deleteBook', () => {
//   it('dispatches the DELETE_BOOKS action.', () => {
//     deleteBookById.mockReturnValue(Promise.resolve(homeContentMockData))
//     return deleteBooks()(fakeDispatch).then(() => {
//       expect(fakeDispatch).toHaveBeenCalledWith({
//         type: 'DELETE_BOOKS',
//         payload: homeContentMockData,
//       })
//     })
//   })
//   it('should console.error() if api request fails.', () => {
//     expect.assertions(2)
//     jest.spyOn(console, 'error')
//     console.error.mockImplementation(() => {})
//     deleteBookById.mockImplementation(() =>
//       Promise.reject(new Error('Something went wrong'))
//     )
//     return deleteBooks()(fakeDispatch).finally(() => {
//       expect(fakeDispatch).toHaveBeenCalledTimes(0)
//       expect(console.error).toHaveBeenCalledWith('Something went wrong')
//     })
//   })
// })
