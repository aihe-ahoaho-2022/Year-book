import { getProfileById, getProfilesByBookId } from '../apis/profile'
import { postProfile } from '../apis/profileEdit'

export function setProfiles(profiles) {
  return {
    type: 'SET_PROFILES',
    payload: profiles,
  }
}

export function updateProfiles(profiles) {
  return {
    type: 'UPDATE_PROFILES',
    payload: profiles,
  }
}

export function addProfile(profiles) {
  return {
    type: 'ADD_PROFILES',
    payload: profiles,
  }
}

//thunks for profiles
export function fetchProfiles(id) {
  // console.log('fetching')
  return (dispatch) => {
    return getProfilesByBookId(id)
      .then((profiles) => {
        dispatch(setProfiles(profiles))
      })
      .catch((err) => console.error(err.message))
  }
}

// thunks for adding new profiles
export function submitProfile(newProfile) {
  return (dispatch) => {
    return postProfile(newProfile)
      .then((newProfilesData) => {
        dispatch(addProfile(newProfilesData))
      })
      .catch((err) => console.error(err.message))
  }
}
