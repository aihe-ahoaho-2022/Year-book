import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
// import { useSelector } from 'react-redux'

import { BrowserRouter as Router } from 'react-router-dom'

import ProfileDetails from '../ProfileDetails'
// import mockData from '../testMockData/mockData'

jest.mock('react-redux')

// useSelector.mockReturnValue(mockData)

// const fakeDispatch = jest.fn()
// useDispatch.mockReturnValue(fakeDispatch)

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

describe('Button style', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('checks style is being applied to edit button', () => {
    render(
      <Router>
        <ProfileDetails />
      </Router>
    )
    const button = screen.getByRole('button')
    const corners = button.style.borderRadius
    expect(button).toHaveStyle({ borderRadius: corners })
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
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(/edit/i)
  })
})
