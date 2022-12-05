import {fetchBook } from '../book'
import {getBookById } from '../../apis/book'

const homeContentMockData = [
  {
    id: 1,
    name: 'EDA Aihe Ahoaho 2022',
    image:
      'https://media.istockphoto.com/id/1224449402/vector/vintage-school-yearbook-cover-vector-layered.jpg?s=612x612&w=0&k=20&c=NSjbIwYxTWDkrVpCLMLWTHyF283ZO4VbYSk_yJoHGVE=',
    theme: 'red',
    auth0_id: 'authtestid1',
  },
  {
    id: 2,
    name: 'EDA Aihe Popoto 2022',
    image:
      'https://media.istockphoto.com/id/1224449402/vector/vintage-school-yearbook-cover-vector-layered.jpg?s=612x612&w=0&k=20&c=NSjbIwYxTWDkrVpCLMLWTHyF283ZO4VbYSk_yJoHGVE=',
    theme: 'blue',
    auth0_id: 'authtestid2',
  },
  {
    id: 3,
    name: 'Dog Agility Class 22',
    image:
      'https://media.istockphoto.com/id/1224449402/vector/vintage-school-yearbook-cover-vector-layered.jpg?s=612x612&w=0&k=20&c=NSjbIwYxTWDkrVpCLMLWTHyF283ZO4VbYSk_yJoHGVE=',
    theme: 'green',
    auth0_id: 'authtestid3',
  },
  {
    id: 4,
    name: 'Dogwarts Academy',
    image:
      'https://media.istockphoto.com/id/1224449402/vector/vintage-school-yearbook-cover-vector-layered.jpg?s=612x612&w=0&k=20&c=NSjbIwYxTWDkrVpCLMLWTHyF283ZO4VbYSk_yJoHGVE=',
    theme: 'purple',
    auth0_id: 'authtestid4',
  },
]




jest.mock('../../apis/book')

const fakeDispatch = jest.fn()


console.log(fakeDispatch);

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