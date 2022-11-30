import { combineReducers, configureStore } from '@reduxjs/toolkit'

function exampleReducer(state = {}) {
  return state
}

export const store = configureStore({
  reducer: combineReducers({ example: exampleReducer }),
})
