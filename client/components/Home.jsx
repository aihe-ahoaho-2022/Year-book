import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Home.module.scss'
import Book from './Book'
import { setBooks } from '../actions'
import { getBooks } from '../apis/book'
import { Link } from 'react-router-dom'
import { IfAuthenticated } from './Authenticated'

export default function Home() {
  const dispatch = useDispatch()
  const [books, setBooksData] = useState(null)

  useEffect(() => {
    getBooks()
      .then((books) => {
        dispatch(setBooks(books))
        setBooksData(books)
      })
      .catch((e) => console.log(e))
  }, [])

  if (!books) {
    return <div>Loading...</div>
  }
  return (
    <>
      <div className={styles.container}>
        <p className={styles.headingSmall}>Welcome to</p>
        <h1 className={styles.heading}> YeahBook</h1>
        <img
          className={styles.image}
          src='https://thumbs.dreamstime.com/b/diverse-modern-community-people-crowd-elderly-young-man-woman-standing-together-vector-illustration-cartoon-characters-waving-221115543.jpg'
          alt='groupimage'
        />
        <p id='books'>&nbsp;</p>
        <IfAuthenticated>
          <div className={styles.containerRow}>
            {books.map((book, index) => {
              return <Book bookData={book} key={index} />
            })}
          </div>
          <Link to={`/books/add`}>AddNew</Link>
        </IfAuthenticated>
      </div>
    </>
  )
}
