import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import BookEdit from '../BookEdit'
import { getBookById, deleteBookById } from '../../apis/book'
import { Provider } from 'react-redux'

const MockData = [
  {
    id: 1,
    name: "banana",
  },
]

const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => {
    return { beans: MockData }
  }),
}

jest.mock('../../apis/book')

describe('<BookEdit />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('check button shown', () => {
    render(
      <Provider store={fakeStore}>
        <Router>
          <BookEdit />
        </Router>
      </Provider>
    )
    const button1 = screen.getAllByRole('button', { name: 'Update' })
    expect(button1[0]).toHaveTextContent('Update')

    const button2 = screen.getAllByRole('button', { name: 'Delete This Book' })
    expect(button2[0]).toHaveTextContent('Delete')
  })

  it('loads book from api on load', () => {
    getBookById.mockReturnValue(
      Promise.resolve([
        {
          id: 1,
          name: 'banana',
        },
      ])
    )
    render(
      <Provider store={fakeStore}>
        <Router>
          <BookEdit />
        </Router>
      </Provider>
    )
    return waitFor(() => getBookById.mock.calls.length > 0).then(() => {
      let book = screen.getByText('banana')
      console.log(book)
      expect(book).not.toBeNull()
    })
  })
})
