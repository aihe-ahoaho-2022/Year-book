import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import styles from './Home.module.scss'
import Book from './Book'
import { setBooks } from '../actions'
import { getBooks } from '../apis/book'

import { Button } from '@mantine/core'

import { IfAuthenticated } from './Authenticated'

// import { fetchHomeContent } from '../actions/home'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const books = useSelector((state) => state.books)

  useEffect(() => {
    getBooks()
      .then((books) => {
        dispatch(setBooks(books))
      })
      .then(() => {
        setIsLoading(false)
      })
      .catch((e) => console.log(e))
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <div className={styles.container}>
          <p className={styles.headingSmall}>Welcome to</p>
          <h1 className={styles.heading}> YeahBook</h1>
          <div>
            <img
              className={styles.image}
              src='https://thumbs.dreamstime.com/b/diverse-modern-community-people-crowd-elderly-young-man-woman-standing-together-vector-illustration-cartoon-characters-waving-221115543.jpg'
              alt='groupimage'
            />
          </div>
          <IfAuthenticated>
            <div className={styles.containerRow}>
              {books.map((book, index) => {
                return <Book bookData={book} key={index} />
              })}
            </div>
          </IfAuthenticated>
        </div>
      </>
    )
  }
}
