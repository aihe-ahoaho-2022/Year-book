const initialState = []

const profiles = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_PROFILES':
      return payload
    case 'UPDATE_PROFILES':
      return state.map((profile) => {
        return profile.id == payload.id ? payload : profile
      })
    case 'ADD_PROFILES':
      return [...state, payload]
    case 'DEL_PROFILE':
      return state.filter((profile) => {
        return profile.id != payload
      })
    default:
      return state
  }
}

export default profiles
