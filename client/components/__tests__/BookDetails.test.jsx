import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import BookDetails from '../BookDetails'

jest.mock('react-redux')
useSelector.mockReturnValue([
  { id: 1, name: 'banana' },
  { id: 2, name: 'potato' },
])
const fakeDispatch = jest.fn()
useDispatch.mockReturnValue(fakeDispatch)

describe('<BookDetails />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('shows profiles from redux', () => {
    render(
      <Router>
        <BookDetails />
      </Router>
    )
    const listItems = screen.getAllByRole('img')
    expect(listItems).toHaveLength(3)
  })
})
