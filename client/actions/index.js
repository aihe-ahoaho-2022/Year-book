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

export function setBooks(books) {
  return {
    type: 'SET_BOOKS',
    payload: books,
  }
}

export function updateBooks(books) {
  return {
    type: 'UPDATE_BOOKS',
    payload: books,
  }
}

export function setComments(comments) {
  return {
    type: 'SET_COMMENTS',
    payload: comments,
  }
}

export function updateComments(comments) {
  return {
    type: 'UPDATE_COMMENTS',
    payload: comments,
  }
}
