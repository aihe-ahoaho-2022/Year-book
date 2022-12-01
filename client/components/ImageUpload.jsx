import React, { useState, useEffect } from 'react'
// import { createProfile } from ''
import { uploadFile } from '../apis/profileImage'

export default function ImageUpload() {
  const [image, setImage] = useState(null)
  // const [profileId, setProfileId] = useState(Date.now())
  // const [image, setImage] = useState()
  // const dispatch = useDispatch()

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const newImage = {
  //     image,
  //   }
  // dispatch(createProfile(newImage))
  // }
  const [profileImage, setProfileImage] = useState({
    image: '',
  })
  // useEffect(() => {
  //   const date = Date.now()
  //   setProfileId(date)
  // }, [])

  const handleImageUpload = (e) => {
    setImage(e.target.files[0])
  }

  const handleFileUpload = () => {
    uploadFile(image)
      .then((returnedImage) => {
        setProfileImage((currentData) => {
          return {
            ...currentData,
            image: returnedImage.href,
          }
        })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <>
      <div>
        <h1>Upload image</h1>
        <form
          method='POST'
          onSubmit={handleImageUpload}
          action='/api/v1/profile/imageupload'
          encType='multipart/form-data'
        >
          <input
            type='file'
            // value={image}
            name='image'
          />
          <button type='submit' onClick={handleFileUpload}>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
