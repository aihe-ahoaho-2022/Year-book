import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
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
  it('shows profiles imgs from redux', () => {
    render(
      <Router>
        <BookDetails />
      </Router>
    )
    const imgs = screen.getAllByRole('img')
    expect(imgs).toHaveLength(3)
  })

  it('check for headings shown', () => {
    render(
      <Router>
        <BookDetails />
      </Router>
    )
    const headings = screen.getAllByRole('heading')
    console.log(headings[0])
    expect(headings).toHaveLength(4)

    expect(headings[1]).toHaveTextContent('banana')
  })
})
