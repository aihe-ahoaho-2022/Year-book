import { getProfileById, getProfilesByBookId } from '../apis/home'

export const SET_PROFILES = 'SET_PROFILES'
export const UPDATE_PROFILES = 'UPDATE_PROFILES'

export function setProfiles(profiels) {
  return {
    type: SET_PROFILES,
    payload: profiels,
  }
}
export function updateProfiles(profiels) {
  return {
    type: UPDATE_PROFILES,
    payload: profiels,
  }
}

export function fetchProfiles() {
  return (dispatch) => {
    return getProfilesByBookId()
      .then((profiles) => {
        dispatch(setProfiles(profiles))setProfiles(profiles))
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}
