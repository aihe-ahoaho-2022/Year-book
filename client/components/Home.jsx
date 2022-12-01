import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
import styles from './Home.module.scss'
import Book from './Book'
import { setBooks } from '../actions'
import { getBooks } from '../apis/book'

import { Button } from '@mantine/core'

// import { fetchHomeContent } from '../actions/home'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  // const singlebook = useSelector((state) => state.books)

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
          <h1 className={styles.heading}> Welcome to YearBook!</h1>
          <div className={styles.text}>
            <p>
              <img src='#' alt='#' />
            </p>
            {/* <ifAuthenticated> */}
            {/* TODO: Map over the books for the user */}
            <Book />
            {/* </ifAuthenticated> */}
          </div>
        </div>

        <div>
          <Button
            variant="gradient" gradient={{ from: 'blue', to: 'green' }}
            size="lg"
            className={styles.button}>

            edit
          </Button>
        </div>
      </>
    )
  }
}