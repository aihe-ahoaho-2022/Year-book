import React, { useState, useEffect } from 'react'

import { getProfileContent, putProfileContent } from '../apis/profileEdit'

import { useParams } from 'react-router-dom'

export default function FruitEditor() {
  // Ready up React state
  const { profileid } = useParams()

  const [profile, setProfile] = useState({ name: "", quote: "", blurb: "" })

  useEffect(async () => {

    const profileData = await getProfileContent(profileid)

    setProfile(profileData)

  }, [])


  const handleChange = (e) => {
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
                value={profile.name}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              Quote:
              <input
                value={profile.quote}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              Blurb:
              <input
                value={profile.blurb}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              linkedin:
              <input
                value={profile.linkedin_url}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              facebook:
              <input
                value={profile.facebook_url}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              twitter:
              <input
                value={profile.twitter_url}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              instagram:
              <input
                value={profile.instagram_url}
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
