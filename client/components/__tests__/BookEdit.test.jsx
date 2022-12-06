import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import BookEdit from '../BookEdit'
import { getBookById, deleteBookById } from '../../apis/book'
import { Provider } from 'react-redux'
import store from '../../store'

const MockData =  {
    id: 1,
    name: 'The Book about Bananas',
    theme: 'fruit drama'
  }

jest.mock('../../apis/book')

// getBookById.mockInplementation(() => Promise.resolve(MockData))

describe('<BookEdit />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('check button shown', async () => {
    getBookById.mockImplementation(() => Promise.resolve(MockData))

    render(
      <Provider store={store}>
        <Router initialEntries={['/123/edit']}>
          <BookEdit add={false} />
        </Router>
      </Provider>
    )

    await waitFor(() => {
      expect(getBookById).toHaveBeenCalled()
    })

    expect(getBookById).toHaveBeenCalledWith('123')

    const button1 = screen.getAllByRole('button', { name: 'Update' })
    expect(button1[0]).toHaveTextContent('Update')

    const button2 = screen.getAllByRole('button', { name: 'Delete This Book' })
    expect(button2[0]).toHaveTextContent('Delete')
  })
})
