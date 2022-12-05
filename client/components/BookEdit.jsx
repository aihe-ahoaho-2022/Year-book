import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { submitBook, updateBook } from '../actions/book'
import { TextInput, Button } from '@mantine/core'
import { useDispatch } from 'react-redux'
import { getBookById, deleteBookById } from '../apis/book'

export default function BookEdit(props) {
  const params = useParams()
  const dispatch = useDispatch()
  const bookId = Number(params.bookid)
  const navigate = useNavigate()
  const [editBook, setEditBook] = useState({
    name: '',
    theme: '',
  })

  useEffect(async () => {
    if (!props.add) {
      const bookData = await getBookById(bookId)
      setEditBook(bookData)
    }
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    if (!props.add) {
      dispatch(updateBook(editBook))
      // navigate('/')
    } else if (props.add) {
      dispatch(submitBook(editBook))
      navigate('/')
    }
  }

  function handleChange(event) {
    event.preventDefault()
    setEditBook({ ...editBook, [event.target.name]: event.target.value })
  }

  function handleDelete(event) {
    event.preventDefault()
    deleteBookById(Number(bookId))
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
          <p>{props.add ? 'Add New Book' : 'Update Book'}</p>
          <ul>
            <TextInput
              label='name'
              name='name'
              value={editBook.name}
              onChange={handleChange}
            ></TextInput>
            <TextInput
              label='theme'
              name='theme'
              value={editBook?.theme}
              onChange={handleChange}
            ></TextInput>
          </ul>
          <Button
            variant='gradient'
            gradient={{ from: 'indigo', to: 'cyan' }}
            size='lg'
            type='submit'
          >
            {props.add ? 'Add' : 'Update'}
          </Button>
        </form>
        <div onSubmit={handleDelete}>
          <Button
            variant='gradient'
            gradient={{ from: 'indigo', to: 'cyan' }}
            size='lg'
            type='submit'
          >
            Delete This Book
          </Button>
        </div>
      </div>
    </>
  )
}
