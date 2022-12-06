import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProfileContent, putProfileContent } from '../apis/profileEdit'
import { submitProfile, updateProfile } from '../actions/profile'
import { useParams, Link, useNavigate } from 'react-router-dom'

import { IfAuthenticated } from './Authenticated'

import { TextInput } from '@mantine/core'

import styles from './ProfileDetails.module.scss'

export default function FruitEditor(props) {
  // Ready up React state
  const params = useParams()
  const navigate = useNavigate()
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
      if (!props.add) {
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
    console.log(props.add, 'handle submit')
    e.preventDefault()
    if (!props.add) {
      console.log(profile)
      await dispatch(updateProfile(profile))
      navigate(`/profiles/${profile.id}`)
    } else if (props.add) {
      profile.bookId = bookId
      await dispatch(submitProfile(profile))
      navigate(`/${bookId}`)
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <p>{props.add ? 'Add New Profile' : 'Update Profile'}</p>
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

          <IfAuthenticated>
            <div className={styles.buttonwrap}>
              <button className={styles.button}>
                {props.add ? 'Add New' : 'Update Profile'}
              </button>
            </div>
          </IfAuthenticated>
        </form>
      </div>
    </>
  )
}
