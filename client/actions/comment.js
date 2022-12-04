import { getCommentsByBookId, postComment } from '../apis/comments'

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

//thunks for Comments
export function fetchComments(id) {
  // console.log('fetching')
  return (dispatch) => {
    return getCommentsByBookId(id)
      .then((commentData) => {
        dispatch(setComments(commentData))
      })
      .catch((err) => console.error(err.message))
  }
}
