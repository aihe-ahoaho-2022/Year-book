const initialState = {}

const books = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_BOOKS':
      return [...state, payload]
    case 'SET_BOOKS':
      return payload
    case 'UPDATE_BOOKS':
      return payload
    case 'DELETE_BOOKS':
      return state.filter((profile) => {
        return profile.id != payload
      })
    default:
      return state
  }
}

export default books
