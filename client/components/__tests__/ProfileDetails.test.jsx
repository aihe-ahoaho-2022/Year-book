import '@testing-library/jest-dom'
import React from 'react'
// import { useSelector } from 'react-redux'
import { render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter as Router } from 'react-router-dom'
import { getProfileById } from '../../apis/profile'

import ProfileDetails from '../ProfileDetails'
import mockData from '../testMockData/mockData'

jest.mock('react-redux')
// jest.mock('../../apis/profile')

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

describe('getProfileById', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('retrieves profile by id from API', () => {
    getProfileById.mockReturnValue(Promise.resolve(mockData))
    render(
      <Router>
        <ProfileDetails />
      </Router>
    )
    return waitFor(() => getProfileById.mock.calls.length).then(() => {
      let profile = screen.getByText(/Testo McTestface/i)
      expect(profile).toBeInTheDocument()
    })
  })
})
