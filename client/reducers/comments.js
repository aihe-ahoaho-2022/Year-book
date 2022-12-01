const initialState = {}

const comments = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_COMMENTS':
      return payload
    case 'UPDATE_COMMENTS':
      return payload
    default:
      return state
  }
}

export default comments
