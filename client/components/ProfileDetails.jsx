import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import { getProfileById } from '../apis/profile'
import styles from './ProfileDetails.module.scss'

export default function ProfileDetails() {
  const { profileid } = useParams()
  const [profile, setProfile] = useState('')

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
    <>
      {/* <Link to='/:bookid'>
        <div className={styles.fullscreen}> */}
      <div className={styles.container}>
        {/* <div className={styles.imagewrap}> */}
        <img
          className={styles.image}
          src={profile.image}
          // src={`/images/${profile.image}`}
          alt='User profile'
        />
        {/* </div> */}
        <section className={styles.textbox}>
          <h1 className={styles.heading}>{profile.name}</h1>
          <h2 className={styles.quote}>{`"${profile.quote}"`}</h2>
          <hr className={styles.hr} />
          <h2 className={styles.blurb}>{profile.blurb}</h2>
          <ul className={styles.list}>
            <a href={profile.linkedin_url}>
              <li className={styles.li}>LinkedIn</li>
            </a>
            <a href={profile.twitter_url}>
              <li className={styles.li}>Twitter</li>
            </a>
            <a href={profile.instagram_url}>
              <li className={styles.li}>Instagram</li>
            </a>
            <a href={profile.facebook_url}>
              <li className={styles.li}>Facebook</li>
            </a>
            <a href={profile.github_url}>
              <li className={styles.li}>GitHub</li>
            </a>
          </ul>
        </section>
      </div>
      <div className={styles.buttonwrap}>
        {/* <IfAuthenticated> */}
        <Link to={`/profiles/${profileid}/edit`}>
          <button className={styles.button}>Edit profile</button>
        </Link>
        {/* </IfAuthenticated> */}
      </div>
    </>
  )
}
