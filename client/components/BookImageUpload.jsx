import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { uploadFile } from '../apis/profileImage'
import { useNavigate } from 'react-router'

export default function ImageUpload() {
  const navigate = useNavigate()
  const [bookImage, setBookImage] = useState(null)
  const { profileid } = useParams()

  const handleBookImageUpload = (e) => {
    setBookImage(e.target.files[0])
  }

  const handleBookFileUpload = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('bookImage', bookImage)
    uploadFile(profileid, formData)
      .then(() => navigate(`/book/${profileid}`))
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
