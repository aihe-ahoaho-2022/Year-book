import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import BookDetails from '../ProfileDetails'

jest.mock('react-redux')

describe('<bookDetail />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('check for profiles showing', () => {
    render(
      <Router>
        <BookDetails />
      </Router>
    )
    const headings = screen.getAllByRole('heading')
    expect(headings).toHaveLength(2)
    expect(headings[0]).toHaveClass('heading')
  })
  it('check for list items', () => {
    render(
      <Router>
        <BookDetails />
      </Router>
    )
    const list = screen.getAllByRole('listitem')
    expect(list).toHaveLength(5)
    expect(list[0]).toHaveTextContent('LinkedIn')
  })
})
