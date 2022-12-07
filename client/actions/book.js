import { editBook, postBook, getBookById, deleteBookById } from '../apis/book'

export function setBooks(books) {
  return {
    type: 'SET_BOOKS',
    payload: books,
  }
}

export function addBook(books) {
  return {
    type: 'ADD_BOOKS',
    payload: books,
  }
}

export function updateBooks(books) {
  return {
    type: 'UPDATE_BOOKS',
    payload: books,
  }
}

export function deleteBooks(id) {
  return {
    type: 'DELETE_BOOKS',
    payload: id,
  }
}

export function fetchBook(id) {
  return (dispatch) => {
    return getBookById(id)
      .then((bookResult) => {
        dispatch(setBooks(bookResult))
      })
      .catch((err) => console.error(err.message))
  }
}
export function submitBook(newBook, token) {
  return (dispatch) => {
    return postBook(newBook, token)
      .then((newBookData) => {
        dispatch(addBook(newBookData))
      })
      .catch((err) => console.error(err.message))
  }
}

export function updateBook(newBook, token) {
  return (dispatch) => {
    return editBook(newBook, token)
      .then((newBookData) => {
        dispatch(updateBooks(newBookData))
      })
      .catch((err) => console.error(err.message))
  }
}

export function destroyBook(bookid, token) {
  console.log('fetching')
  return (dispatch) => {
    return deleteBookById(bookid, token)
      .then(() => {
        console.log('Succesful result from api')
        dispatch(deleteBooks(bookid))
      })
      .catch((err) => console.error(err.message))
  }
}
