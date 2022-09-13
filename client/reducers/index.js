import { combineReducers } from 'redux'

import home from './home'
import play from './play'

export default combineReducers({
  home: home,
  play: play,
})
