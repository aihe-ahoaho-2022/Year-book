import React from 'react'
// import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <>
      <div>
        <footer className={styles.footer}>
          <div className={styles.title}>
            <img
              className='footer_pattern'
              alt='pattern'
              src='../../images/pattern.svg'
            ></img>
            <h3>Designed by [ Anna, Ben, James, Razel, Tom, Yumi ] </h3>
          </div>
        </footer>
      </div>
    </>
  )
}
