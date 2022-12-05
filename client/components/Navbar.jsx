import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './Navbar.module.scss'
import AuthNav from './AuthNav'
import { Popover } from '@headlessui/react'
import { IfAuthenticated } from './Authenticated'
import { getProfileById } from '../apis/profile'

export default function Navbar() {
  const { profileid } = useParams()
  const [ setProfile] = useState('')

  useEffect(() => {
    getProfileById(profileid)
      .then((res) => {
        setProfile(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <Popover className={styles.navbar}>
      <Link to='/'>
        <span className={styles.title}>YeahBook</span>
      </Link>
      <nav className={styles.links}>
        <DesktopLink to='/'>Home</DesktopLink>

        {/* Only render extra options if signed in */}
        {/* Show dropdown of all yearbooks for user?*/}
        <IfAuthenticated>
          <DesktopLink to='/'>My Books</DesktopLink>
          {/* <DesktopLink to={`/profiles/${profileid}`}>My Profile</DesktopLink> */}
          <DesktopLink to={`/`}>My Profile</DesktopLink>
        </IfAuthenticated>
      </nav>

      <div className={styles.links}>
        {/* Render add sighting button & sign out if signed in */}
        <AuthNav />
      </div>
    </Popover>
  )
}

export function DesktopLink({ to, children }) {
  return (
    <Link to={to} className={styles.links}>
      {children}
    </Link>
  )
}
