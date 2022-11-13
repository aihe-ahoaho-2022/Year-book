import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { screen, render } from '@testing-library/react'
import AnimalTile from '../AnimalTile'

const animalMockData = {
  id: 1,
  auth0_id: '1',
  name: 'Bag Cat',
  description: 'Likes bags',
  imageUrl: '/images/bag-cat.jpg',
}

jest.spyOn(console, 'log').mockImplementation(() => {})
jest.spyOn(console, 'error').mockImplementation(() => {})

beforeEach(() => {
  jest.resetAllMocks()
})

describe('<AnimalTile />', () => {
  it('displays image and animal name from props.', () => {
    expect.assertions(2)
    render(<AnimalTile animal={animalMockData} />)
    const animalName = screen.getByText(animalMockData.name, {
      exact: false,
    })
    expect(animalName).toBeTruthy()
    const image = screen.getByRole('img')
    expect(image.src).toMatch(animalMockData.imageUrl)
  })

  it('executes clickHandler on click with correct id', async () => {
    expect.assertions(1)
    render(
      <AnimalTile
        animal={animalMockData}
        clickHandler={(id) => console.log(id)}
      />
    )
    await userEvent.click(screen.getByRole('button'))
    expect(console.log).toHaveBeenCalledWith(animalMockData.id)
  })

  it('throws correct error if required animal prop is not provided', async () => {
    jest.mockImplementation
    expect.assertions(1)
    let error = null
    try {
      render(<AnimalTile />)
    } catch (e) {
      error = e
    } finally {
      expect(error.message).toContain(
        'AnimalTile needs to be passed an animal prop'
      )
    }
  })
})
