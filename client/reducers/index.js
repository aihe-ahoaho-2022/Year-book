import { combineReducers } from 'redux'

import books from './books'
import profiles from './profiles'
import comments from './comments'

export default combineReducers({
  books: books,
  profiles: profiles,
  comments: comments,
})
