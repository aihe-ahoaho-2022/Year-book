import React from 'react'
// import { createProfile } from ''

export default function ImageUpload() {
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
          action='/api/v1/profile/imageupload'
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
