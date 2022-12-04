import books from '../books'

describe('books reducer', () => {
  it('returns the default initial state for an undefined state and no action type.', () => {
    const expectedState = {}
    const outputState = books(undefined, {})

    expect(outputState).toEqual(expectedState)
  })
})
