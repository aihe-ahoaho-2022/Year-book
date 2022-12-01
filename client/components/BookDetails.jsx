import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Profile from './Profile'
import { fetchProfiles, setProfiles } from '../actions/profile'

export default function BookDetails() {
  const params = useParams()
  const bookId = Number(params.bookId)
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const profiles = useSelector((state) => state.profiles)
  console.log(profiles)

  useEffect(() => {
    dispatch(fetchProfiles(bookId))
  }, [])

  return (
    <>
      <h1>Yearbook Title</h1>
      <Profile profile={profiles} />
    </>
  )
}
