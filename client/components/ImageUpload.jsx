import React from 'react'
import { useParams } from 'react-router-dom'
// import { createProfile } from ''

export default function ImageUpload() {
  const { profileid } = useParams()
  // const [image, setImage] = useState()
  // const dispatch = useDispatch()

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const newImage = {
  //     image,
  //   }
  // dispatch(createProfile(newImage))
  // }

  return (
    <>
      <div>
        <h1>Upload image</h1>
        <form
          method='POST'
          // onSubmit={handleSubmit}
          action={'/api/v1/profiles/' + profileid + '/imageupload'}
          encType='multipart/form-data'
        >
          <input
            type='file'
            // value={image}
            name='image'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}
