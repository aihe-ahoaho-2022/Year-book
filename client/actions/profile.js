import { getProfileById, getProfilesByBookId } from '../apis/profile'

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
