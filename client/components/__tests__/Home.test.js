import React from 'react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import { fetchHomeContent } from '../../actions/home'

const homeContentMockData = {
  name: 'mockName',
  imageUrl: 'mockImageUrl',
}

jest.mock('../../actions/home')

beforeEach(() => {
  jest.clearAllMocks()
})

const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => {
    return { home: homeContentMockData }
  }),
}

describe('<Home />', () => {
  it('displays image and animal name from redux state.', () => {
    expect.assertions(2)
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    )
    const animalName = screen.getByText(homeContentMockData.name, {
      exact: false,
    })
    expect(animalName).toBeTruthy()
    const image = screen.getByRole('img')
    expect(image.src).toMatch(homeContentMockData.imageUrl)
  })
  it('has a link to the play route.', () => {
    expect.assertions(1)
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    )

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/play')
  })
  it('dispatches the fetchHomeContent thunk.', () => {
    expect.assertions(1)
    const fetchHomeContentMockReturn = () => 'mockReturnFunctionsReturnValue'
    fetchHomeContent.mockReturnValue(fetchHomeContentMockReturn)
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    )
    expect(fakeStore.dispatch).toHaveBeenCalledWith(fetchHomeContentMockReturn)
  })
})
