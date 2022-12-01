import React, { useEffect, useState } from 'react'

// import styles from './index.scss'
import styles from './Book.module.scss'

export default function Book(prop) {

  // const { id, image, commonName } = book
  // [image, setimage]=useState(null)
  [bookName, setBookName] = useState(null)

  useEffect(() => {
    setBookName()
  }, [])

  // const imageUrl = `/images/${image}`

  return (
    <>

      <h1>Book :D</h1>

      {/* TODO: hard coded for now */}
      {/* <h1>{bookName}</h1> */}
      <h1>Ahoaho 2022</h1>
      <img src={prop.bookName} alt="" />
      <img src="#" style={styles} alt="#" />

      {/* <div>
        <img src={image} alt="" />
      </div> */}

    </>
  )
}
