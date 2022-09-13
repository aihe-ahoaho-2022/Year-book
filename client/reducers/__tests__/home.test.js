import { SET_HOME_CONTENT } from '../../actions/home'
import home from '../home'

const homeContentMockData = {
  captionId: 2,
  captionText: 'mockCaptionText',
  imageId: 2,
  imageUrl: 'mockImageUrl',
}

describe('home reducer', () => {
  it('returns the action payload for type SET_HOME_CONTENT.', () => {
    const action = {
      type: SET_HOME_CONTENT,
      payload: homeContentMockData,
    }
    const initialState = {}
    const expectedState = homeContentMockData
    const outputState = home(initialState, action)

    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toBe(initialState)
  })
  it('returns the default initial state for an undefined state and no action type.', () => {
    const expectedState = {}
    const outputState = home(undefined, {})

    expect(outputState).toEqual(expectedState)
  })
})
