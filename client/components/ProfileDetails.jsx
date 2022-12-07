import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { IfAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { getProfileById } from '../apis/profile'
import { destroyProfile } from '../actions/profile'
import styles from './ProfileDetails.module.scss'

export default function ProfileDetails() {
  const { getAccessTokenSilently } = useAuth0()
  const { profileid } = useParams()
  const [profile, setProfile] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    getProfileById(profileid)
      .then((res) => {
        setProfile(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function confirmDelete(e) {
    const confirmation = confirm(
      `Are you sure you want to delete ${profile.name}'s profile`
    )
    if (confirmation == true) {
      handleDelete(e)
    }
  }

  function handleDelete(e) {
    e.preventDefault()
    getAccessTokenSilently()
      .then((token) => {
        dispatch(destroyProfile(Number(profileid), token))
      })
      .then(() => {
        navigate(`/${profile.bookId}`)
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
          // src={`../public/images/${profile.image}`}
          alt='User profile'
        />
        <section className={styles.textbox}>
          <h1 className={styles.heading}>{profile.name}</h1>
          <h2 className={styles.quote}>{`"${profile.quote}"`}</h2>
          <hr className={styles.hr} />
          <h2 className={styles.blurb}>{profile.blurb}</h2>
          <ul className={styles.list}>
            <a href={profile.linkedinUrl} target='_blank' rel='noreferrer'>
              <li className={styles.li}>LinkedIn</li>
            </a>
            <a href={profile.twitterUrl} target='_blank' rel='noreferrer'>
              <li className={styles.li}>Twitter</li>
            </a>
            <a href={profile.instagramUrl} target='_blank' rel='noreferrer'>
              <li className={styles.li}>Instagram</li>
            </a>
            <a href={profile.facebookUrl} target='_blank' rel='noreferrer'>
              <li className={styles.li}>Facebook</li>
            </a>
            <a href={profile.githubUrl} target='_blank' rel='noreferrer'>
              <li className={styles.li}>GitHub</li>
            </a>
          </ul>
          {console.log(profile)}
        </section>
      </div>
      <IfAuthenticated>
        <div className={styles.buttonwrap}>
          <Link to={`/profiles/${profileid}/imageupload`}>
            <button className={styles.button}>Change Image</button>
          </Link>
          <Link to={`/profiles/${profileid}/edit`}>
            <button className={styles.button}>Edit</button>
          </Link>
          <button onClick={(e) => confirmDelete(e)} className={styles.button}>
            Remove
          </button>
        </div>
      </IfAuthenticated>
    </>
  )
}
