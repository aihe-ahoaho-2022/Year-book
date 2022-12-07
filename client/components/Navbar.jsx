/* eslint-disable no-unused-vars */

import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
import AuthNav from './AuthNav'

import { IfAuthenticated } from './Authenticated'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to='/'>
        <span className={styles.logo}>YeahBook</span>
      </Link>
      <div className={styles.links}>
        <DesktopLink to='/'>Home</DesktopLink>

        {/* Only render extra options if signed in */}
        {/* Show dropdown of all yearbooks for user?*/}
        <IfAuthenticated>
          <a href='/#books'>My Books</a>
        </IfAuthenticated>

        {/* Render add sighting button & sign out if signed in */}
        <AuthNav />
      </div>
    </div>
  )
}

export function DesktopLink({ to, children }) {
  return (
    <Link to={to} className={styles.links}>
      {children}
    </Link>
  )
}
