import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import styles from './Home.module.scss'
import Book from './Book'

// import { fetchHomeContent } from '../actions/home'

export default function Home() {
  const dispatch = useDispatch()
  const homeContent = useSelector((state) => state.home)

  // const homeContent = useSelector((state) => state.home)

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}> Welcome to YearBook!</h1>
      <div className={styles.text}>
        <p>
          <img src='#' alt='#' />
        </p>
        <ifAuthenticated>
          {/* TODO: Map over the books for the user */}
          <Book />
        </ifAuthenticated>
      </div>
      <div>
        <img
          className={styles.image}
          src={homeContent.imageUrl}
          alt={homeContent.description}
        />
      </div>
    </div>
  )
}
