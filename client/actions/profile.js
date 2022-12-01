import { getProfileById, getProfilesByBookId } from '../apis/book'

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
