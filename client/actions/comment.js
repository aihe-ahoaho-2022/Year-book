import { getCommentsByBookId } from '../apis/comments'

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

//thunks for profiles
export function fetchComments(id) {
  // console.log('fetching')
  return (dispatch) => {
    return getCommentsByBookId(id)
      .then((profiles) => {
        dispatch(setComments(profiles))
      })
      .catch((err) => console.error(err.message))
  }
}
