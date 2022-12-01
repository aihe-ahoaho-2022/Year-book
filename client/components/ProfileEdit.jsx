import React, { useState, useEffect } from 'react'

import { getProfileContent, putProfileContent } from '../apis/profileEdit'

import { useParams } from 'react-router-dom'

export default function FruitEditor() {
  // Ready up React state
  const { profileid } = useParams()

  const [profile, setProfile] = useState({
    name: "",
    quote: "",
    blurb: "",
    linkedinUrl: "",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    githubUrl: "",
  })

  useEffect(async () => {
    const profileData = await getProfileContent(profileid)
    console.log(profileData)
    setProfile(profileData)
  }, [])

  const handleChange = (e) => {
    console.log(e.target.name)
    setProfile({ ...profile, [e.target.name]: e.target.value })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await putProfileContent(profile)
    console.log(profile);
  };


  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <p>Create Editor:</p>
          <ul>
            <li>
              Name:
              <input
                name='name'
                value={profile.name}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              Quote:
              <input
                name='quote'
                value={profile.quote}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              Blurb:
              <input
                name='blurb'
                value={profile.blurb}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              linkedin:
              <input
                name='linkedinUrl'
                value={profile.linkedinUrl}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              facebook:
              <input
                name='facebookUrl'
                value={profile.facebookUrl}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              twitter:
              <input
                name='twitterUrl'
                value={profile.twitterUrl}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              instagram:
              <input
                name='instagramUrl'
                value={profile.instagramUrl}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              github:
              <input
                name='githubUrl'
                value={profile.githubUrl}
                onChange={handleChange}
              ></input>
            </li>
          </ul>
          <button type="submit" >Save</button>
        </form>
      </div>
    </>
  )

}
