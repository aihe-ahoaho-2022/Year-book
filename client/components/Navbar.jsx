import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
import AuthNav from './AuthNav'
import { Popover } from '@headlessui/react'

// export default function Navbar() {
//   return (
//     <nav className={styles.navbar}>
//       <Link to='/'>
//         <div className={styles.title}>Home</div>
//       </Link>
//       <div className={styles.links}>
//         <AuthNav />
//       </div>
//     </nav>
//   )
// }

export default function Navbar() {
  return (
    <Popover className={styles.navbar}>
      <Link to='/'>
        <span className={styles.title}>YeahBook</span>
      </Link>
      <nav className={styles.links}>
        <DesktopLink to='/'>Home</DesktopLink>

        {/* Only render extra options if signed in */}
        {/* Show dropdown of all yearbooks for user?*/}
        <DesktopLink to='/'>My Books</DesktopLink>
        <DesktopLink to='/'>My Profile</DesktopLink>
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
