import { combineReducers } from 'redux'

import home from './home'
import play from './play'
import final from './final'

export default combineReducers({
  home: home,
  play: play,
  final: final,
})
