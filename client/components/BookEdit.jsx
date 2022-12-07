import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { destroyBook, submitBook, updateBook } from '../actions/book'
import { TextInput } from '@mantine/core'
import { useDispatch } from 'react-redux'
import { getBookById } from '../apis/book'
import { useAuth0 } from '@auth0/auth0-react'

export default function BookEdit(props) {
  const { getAccessTokenSilently } = useAuth0()
  const params = useParams()
  const dispatch = useDispatch()
  const bookId = Number(params.bookid)
  const navigate = useNavigate()
  const [editBook, setEditBook] = useState({
    name: '',
    theme: '',
  })

  useEffect(() => {
    const loadBookData = async () => {
      if (!props.add) {
        const bookData = await getBookById(bookId)
        setEditBook(bookData)
      }
    }
    loadBookData()
  }, [bookId])

  function confirmDelete(event) {
    const confirmation = confirm(
      `Are you sure you want to delete ${editBook.name}`
    )
    if (confirmation) {
      handleDelete(event)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    getAccessTokenSilently()
      .then((token) => {
        if (!props.add) {
          dispatch(updateBook(editBook, token))
          navigate('/')
        } else if (props.add) {
          dispatch(submitBook(editBook, token))
          navigate('/')
        }
      })
      .catch((e) => console.log(e))
  }

  function handleChange(event) {
    event.preventDefault()
    setEditBook({ ...editBook, [event.target.name]: event.target.value })
  }

  function handleChangeCover() {
    navigate(`/${bookId}/imageupload`)
  }

  function handleDelete(event) {
    event.preventDefault()
    getAccessTokenSilently()
      .then((token) => {
        dispatch(destroyBook(Number(bookId), token))
      })
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>{props.add ? 'Add New Book' : 'Update Book'}</h2>
          <ul>
            <TextInput
              label='name'
              name='name'
              value={editBook.name}
              onChange={handleChange}
            ></TextInput>
          </ul>
          <button type='submit'>{props.add ? 'Add' : 'Update'}</button>
        </form>
        {props.add ? null : (
          <button
            onKeyPress={confirmDelete}
            onClick={confirmDelete}
            tabIndex={0}
          >
            Delete This Book
          </button>
        )}
        <div>
          <button onClick={handleChangeCover} type='submit'>
            Change Book Cover
          </button>
        </div>
      </div>
    </>
  )
}
