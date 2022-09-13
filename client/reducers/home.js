import { SET_HOME_CONTENT } from '../actions/home'

const initialState = {}

const home = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_HOME_CONTENT:
      return payload
    default:
      return state
  }
}

export default home
