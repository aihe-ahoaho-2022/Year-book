import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Profile from './Profile'
import { getProfilesByBookId } from '../apis/home'
import { setProfiles } from '../actions'

export default function BookDetails() {
  const params = useParams()
  const bookId = Number(params.bookId)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function displayProfiles() {
    getProfilesByBookId()
      .then((profiles) => {
        dispatch(setProfiles(profiles))
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
  ge

  return (
    <>
      <h1>Yearbook Title</h1>
      <Profile profile={profile} />
    </>
  )
}
