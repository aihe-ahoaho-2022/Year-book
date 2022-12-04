import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import { getProfileById, removeProfile } from '../apis/profile'
import styles from './ProfileDetails.module.scss'

export default function ProfileDetails() {
  const { profileid } = useParams()
  const [profile, setProfile] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    getProfileById(profileid)
      .then((res) => {
        setProfile(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function handleDelete(e) {
    e.preventDefault()
    removeProfile(Number(profileid))
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={profile.image}
          // src={`/images/${profile.image}`}
          alt='User profile'
        />
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
          <button className={styles.button}>Edit</button>
        </Link>
        {/* </IfAuthenticated> */}
        {/* <IfAuthenticated> */}
        <button onClick={(e) => handleDelete(e)} className={styles.button}>
          Remove
        </button>
        {/* </IfAuthenticated> */}
      </div>
    </>
  )
}
