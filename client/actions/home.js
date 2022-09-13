import { getHomeContent } from '../apis/home'

export const SET_HOME_CONTENT = 'SET_HOME_CONTENT'

export function setHomeContent(HomeContent) {
  return {
    type: SET_HOME_CONTENT,
    payload: HomeContent,
  }
}

export function fetchHomeContent() {
  return (dispatch) => {
    return getHomeContent()
      .then((homeContent) => {
        dispatch(setHomeContent(homeContent))
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}
