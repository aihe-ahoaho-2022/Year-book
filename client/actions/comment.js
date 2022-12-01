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
