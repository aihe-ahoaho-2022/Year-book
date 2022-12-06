import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getProfileContent, putProfileContent } from '../apis/profileEdit'
import { submitProfile } from '../actions/profile'
import { useParams, Link } from 'react-router-dom'

import { IfAuthenticated } from './Authenticated'

import { TextInput } from '@mantine/core'

import styles from './ProfileDetails.module.scss'

export default function FruitEditor() {
  // Ready up React state
  const params = useParams()
  const dispatch = useDispatch()
  const bookId = Number(params.bookid)

  const { profileid } = useParams()

  const [profile, setProfile] = useState({
    name: '',
    quote: '',
    blurb: '',
    linkedinUrl: '',
    facebookUrl: '',
    twitterUrl: '',
    instagramUrl: '',
    githubUrl: '',
  })

  useEffect(() => {
    const updateProfile = async () => {
      if (profileid) {
        const profileData = await getProfileContent(profileid)
        setProfile(profileData)
      }
    }
    updateProfile()
  }, [])

  const handleChange = (e) => {
    console.log(e.target.name)
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (profileid) {
      await putProfileContent(profile)
    } else {
      profile.bookId = bookId
      await dispatch(submitProfile(profile))
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <p>{!profileid ? 'Add New Profile' : 'Update Profile'}</p>
          <ul>
            <TextInput
              label='Name'
              name='name'
              value={profile.name}
              onChange={handleChange}
            />
            <TextInput
              label='Quote'
              name='quote'
              value={profile.quote}
              onChange={handleChange}
            />
            <TextInput
              label='Blurb'
              name='blurb'
              value={profile.blurb}
              onChange={handleChange}
            />
            <TextInput
              label='Linkedin'
              name='linkedinUrl'
              value={profile.linkedinUrl}
              onChange={handleChange}
            />
            <TextInput
              label='Facebook'
              name='facebookUrl'
              value={profile.facebookUrl}
              onChange={handleChange}
            />

            <TextInput
              label='Twitter'
              name='twitterUrl'
              value={profile.twitterUrl}
              onChange={handleChange}
            />

            <TextInput
              label='Instagram'
              name='instagramUrl'
              value={profile.instagramUrl}
              onChange={handleChange}
            />

            <TextInput
              label='Github'
              name='githubUrl'
              value={profile.githubUrl}
              onChange={handleChange}
            />
          </ul>

          <IfAuthenticated>
            <div className={styles.buttonwrap}>
              <Link to={`/profiles/${profileid}`}>
                <button className={styles.button}>
                  {!profileid ? 'Add New' : 'Update Profile'}
                </button>
              </Link>
            </div>
          </IfAuthenticated>
        </form>
      </div>
    </>
  )
}
