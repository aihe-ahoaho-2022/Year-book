import React, { useState, useEffect } from 'react'

import { getProfileContent, putProfileContent } from '../apis/profileEdit'

import { useParams } from 'react-router-dom'

import { TextInput, Button } from '@mantine/core'

export default function FruitEditor(props) {
  // Ready up React state
  if (props.add) {
    console.log('add')
  }
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

  useEffect(async () => {
    if (!props.add) {
      const profileData = await getProfileContent(profileid)
      console.log(profileData)
      setProfile(profileData)
    }
  }, [])

  const handleChange = (e) => {
    console.log(e.target.name)
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!props.add) {
      await putProfileContent(profile)
    }
    
    console.log(profile)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          props.add ?<p>Create Editor:</p>
          <ul>
            <TextInput
              label='Name'
              name='name'
              value={profile.name}
              onChange={handleChange}
            ></TextInput>
            <TextInput
              label='Quote'
              name='quote'
              value={profile.quote}
              onChange={handleChange}
            ></TextInput>
            <TextInput
              label='Blurb'
              name='blurb'
              value={profile.blurb}
              onChange={handleChange}
            ></TextInput>
            <TextInput
              label='Linkedin'
              name='linkedinUrl'
              value={profile.linkedinUrl}
              onChange={handleChange}
            ></TextInput>
            <TextInput
              label='Facebook'
              name='facebookUrl'
              value={profile.facebookUrl}
              onChange={handleChange}
            ></TextInput>

            <TextInput
              label='Twitter'
              name='twitterUrl'
              value={profile.twitterUrl}
              onChange={handleChange}
            ></TextInput>

            <TextInput
              label='Instagram'
              name='instagramUrl'
              value={profile.instagramUrl}
              onChange={handleChange}
            ></TextInput>

            <TextInput
              label='Github'
              name='githubUrl'
              value={profile.githubUrl}
              onChange={handleChange}
            ></TextInput>
          </ul>
          <Button
            variant='gradient'
            gradient={{ from: 'indigo', to: 'cyan' }}
            size='lg'
            type='submit'
          >
            Save
          </Button>
        </form>
      </div>
    </>
  )
}
