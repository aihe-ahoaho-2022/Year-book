import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { uploadFile } from '../apis/profileImage'
import { useNavigate } from 'react-router'

export default function ImageUpload() {
  const navigate = useNavigate()
  const [image, setImage] = useState(null)
  const { profileid } = useParams()

  const handleImageUpload = (e) => {
    setImage(e.target.files[0])
  }

  const handleFileUpload = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', image)
    uploadFile(profileid, formData)
      .then(() => navigate(`/profiles/${profileid}`))
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <>
      <div>
        <label htmlFor='upload'>
          <h1>Upload image</h1>
          <form onSubmit={handleFileUpload} encType='multipart/form-data'>
            <input type='file' name='image' onChange={handleImageUpload} />
            <button type='submit'>Submit</button>
          </form>
        </label>
      </div>
    </>
  )
}
