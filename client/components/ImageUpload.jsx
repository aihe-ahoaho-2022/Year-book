import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { uploadFile } from '../apis/profileImage'
import { useNavigate } from 'react-router'

export default function ImageUpload() {
  const navigate = useNavigate()
  const [image, setImage] = useState(null)
  const { profileid } = useParams()
  const [setProfileImage] = useState({
    image: '',
  })

  const handleImageUpload = (e) => {
    setImage(e.target.files[0])
    navigate()
  }

  const handleFileUpload = () => {
    uploadFile(profileid, image)
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

  // const navigate = useNavigate()
  // function onRedirectCallback(appState) {
  //   navigate(appState?.returnTo || window.location.pathname)
  // }

  //   return (
  //     <Auth0Provider
  //       onRedirectCallback={onRedirectCallback}
  //       redirectUri={window.location.origin}
  //       domain=''
  //       clientId=''
  //       audience=''
  //     >
  //       {children}
  //     </Auth0Provider>
  //   )
  // }

  return (
    <>
      <div>
        <h1>Upload image</h1>
        <form
          method='POST'
          onSubmit={handleImageUpload}
          action={'/api/v1/profiles/' + profileid + '/imageupload'}
          encType='multipart/form-data'
        >
          <input type='file' name='image' />
          <button type='submit' onClick={handleFileUpload}>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
