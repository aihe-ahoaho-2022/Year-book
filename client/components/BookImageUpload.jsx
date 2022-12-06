import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { uploadBookFile } from '../apis/book'
import { useNavigate } from 'react-router'

export default function ImageUpload() {
  const navigate = useNavigate()
  const [bookImage, setBookImage] = useState(null)
  const { bookid } = useParams()

  const handleBookImageUpload = (e) => {
    setBookImage(e.target.files[0])
  }

  const handleBookFileUpload = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('bookImage', bookImage)
    uploadBookFile(bookid, formData)
      .then(() => navigate(`/book/${bookid}`))
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <>
      <div>
        <label htmlFor='upload'>
          <h1>Upload book image</h1>
          <form onSubmit={handleBookFileUpload} encType='multipart/form-data'>
            <input
              type='file'
              name='bookImage'
              onChange={handleBookImageUpload}
            />
            <button type='submit'>Submit</button>
          </form>
        </label>
      </div>
    </>
  )
}
