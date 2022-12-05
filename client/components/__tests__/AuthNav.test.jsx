import '@testing-library/jest-dom'

import { useAuth0 } from '@auth0/auth0-react'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'

// import Navbar from '../Navbar'
import AuthNav from '../AuthNav'

jest.mock('@auth0/auth0-react')

const fakeLogin = jest.fn()
const fakeLogout = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

describe('<AuthNav />', () => {
  describe('When user is not signed in', () => {
    it('renders sign in button', () => {
      useAuth0.mockReturnValue({
        user: null,
        isNotAuthenticated: true,
      })

      render(
        <Router>
          <AuthNav />
        </Router>
      )
      expect(
        screen.getByRole('button', { name: /Log in/i })
      ).toBeInTheDocument()
    })
    it('should call loginWithRedirect when sign in clicked', () => {
      useAuth0.mockReturnValue({
        user: null,
        isAuthenticated: false,
        loginWithRedirect: fakeLogin,
      })

      render(
        <Router>
          <AuthNav />
        </Router>
      )

      const button = screen.getByRole('button', { name: /Log in/i })

      fireEvent.click(button)
      expect(fakeLogin).toHaveBeenCalled()
    })
  })
  describe('When user is signed in', () => {
    it('renders log off button', () => {
      useAuth0.mockReturnValue({
        user: 'james',
        isAuthenticated: true,
      })

      render(
        <Router>
          <AuthNav />
        </Router>
      )
      expect(
        screen.getByRole('button', { name: /Log off/i })
      ).toBeInTheDocument()
    })

    it('should call logout() when logout is clicked', () => {
      useAuth0.mockReturnValue({
        user: null,
        isAuthenticated: true,
        logout: fakeLogout,
      })

      render(
        <Router>
          <AuthNav />
        </Router>
      )

      const button = screen.getByRole('button', { name: /log off/i })

      fireEvent.click(button)
      expect(fakeLogout).toHaveBeenCalledTimes(1)
    })
  })
})
