import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getProfileContent } from '../apis/profileEdit'
import { submitProfile, updateProfile } from '../actions/profile'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated } from './Authenticated'

import { TextInput } from '@mantine/core'

import styles from './ProfileDetails.module.scss'

export default function FruitEditor() {
  // Ready up React state
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const bookId = Number(params.bookid)
  const { profileid } = useParams()
  const { user } = useAuth0()
  const [profile, setProfile] = useState({
    name: '',
    quote: '',
    blurb: '',
    linkedinUrl: '',
    facebookUrl: '',
    twitterUrl: '',
    instagramUrl: '',
    githubUrl: '',
    ownerId: '',
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
      await dispatch(updateProfile(profile))
      navigate(`/profiles/${profile.id}`)
    } else {
      profile.bookId = bookId
      profile.ownerId = user.name
      await dispatch(submitProfile(profile))
      navigate(`/${bookId}`)
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <p>{!profileid ? 'Add New Profile' : 'Update Profile'}</p>
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
            maxlength='100'
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

          <IfAuthenticated>
            <div className={styles.buttonwrap}>
              <button className={styles.button}>
                {!profileid ? 'Add New' : 'Update Profile'}
              </button>
            </div>
          </IfAuthenticated>
        </form>
      </div>
    </>
  )
}
