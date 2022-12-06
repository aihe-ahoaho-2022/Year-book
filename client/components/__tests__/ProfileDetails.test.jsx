import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import ProfileDetails from '../ProfileDetails'

jest.mock('react-redux')

describe('<ProfileDetails />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('check for headings shown', () => {
    render(
      <Router>
        <ProfileDetails />
      </Router>
    )
    const headings = screen.getAllByRole('heading')
    expect(headings).toHaveLength(3)
    expect(headings[0]).toHaveClass('heading')
  })
  it('check for list items', () => {
    render(
      <Router>
        <ProfileDetails />
      </Router>
    )
    const list = screen.getAllByRole('listitem')
    expect(list).toHaveLength(5)
    expect(list[0]).toHaveTextContent('LinkedIn')
  })
})

describe('Button displays content', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('checks button is displaying "edit"', () => {
    render(
      <Router>
        <ProfileDetails />
      </Router>
    )
    const button = screen.getAllByRole('button')
    expect(button[0]).toHaveTextContent(/edit/i)
  })
})

//////******

// TO DO

// edit button event
// delete button event (when there's a delete button)
// api call
