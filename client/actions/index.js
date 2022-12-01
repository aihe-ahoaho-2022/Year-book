// import { combineActions } from 'redux-actions'

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
