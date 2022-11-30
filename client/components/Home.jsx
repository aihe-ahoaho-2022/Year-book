import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Home.module.scss'

// import { fetchHomeContent } from '../actions/home'

export default function Home() {
  // const dispatch = useDispatch()

  // const homeContent = useSelector((state) => state.home)

  // useEffect(() => dispatch(fetchHomeContent()), [])

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}> Welcome to YeahBook!</h1>
      <div className={styles.text}>Text here</div>

      <Link to='/1'>
        <button className={styles.button}>Select your cohort</button>
      </Link>
    </div>
  )
}
