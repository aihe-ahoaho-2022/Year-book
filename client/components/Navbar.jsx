import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to='/'>
        <div className={styles.title}>Main page</div>
      </Link>
      <div className={styles.links}>




        <div className={styles.auth}>  Login | Log out</div>
      </div>
    </nav>
  )
}
