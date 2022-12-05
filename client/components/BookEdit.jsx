import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { updateBook } from '../actions/book'
import { TextInput, Button } from '@mantine/core'
import { useDispatch } from 'react-redux'
import { getBookById } from '../apis/book'

export default function BookEdit() {
  const params = useParams()
  const dispatch = useDispatch()
  const bookId = Number(params.bookid)
  const [editBook, setEditBook] = useState({
    name: '',
    theme: '',
  })
  console.log(editBook)

  useEffect(() => {
    getBookById(bookId)
      .then((book) => {
        setEditBook(book)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(updateBook(editBook))
  }

  function handleChange(event) {
    console.log(event.target.name)
    event.preventDefault()
    setEditBook({ ...editBook, [event.target.name]: event.target.value })
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
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
              value={editBook.theme}
              onChange={handleChange}
            ></TextInput>
          </ul>
          <Button
            variant='gradient'
            gradient={{ from: 'indigo', to: 'cyan' }}
            size='lg'
            type='submit'
          >
            Save
          </Button>
        </form>
      </div>
    </>
  )
}
