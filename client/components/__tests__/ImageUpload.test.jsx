import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import ImageUpload from '../ImageUpload'

jest.mock('react-redux')

describe('<ProfileDetails />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it(`check for text 'upload image'`, () => {
    render(
      <Router>
        <ImageUpload />
      </Router>
    )
    const heading = screen.getAllByRole('heading')
    expect(heading).toHaveLength(1)
    // expect(heading).toHaveClass('heading')
    // expect(heading).toBeInTheDocument([])
  })
  it('check for submit button', () => {
    render(
      <Router>
        <ImageUpload />
      </Router>
    )
    const button = screen.getAllByRole('button')
    // expect(button).toContain('Submit')
    // expect(button).toHaveAttribute('type', 'submit')
    expect(button).toHaveLength(1)
  })
})
