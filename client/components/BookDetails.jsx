import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
// import Profile from './Profile'
import { fetchProfiles, setProfiles } from '../actions/profile'

export default function BookDetails(data) {
  const params = useParams()
  const bookId = Number(params.bookid)
  const dispatch = useDispatch()
  // const [isLoading, setIsLoading] = useState(true)
  // // const navigate = useNavigate()
  const profiles = useSelector((state) => state.profiles)
  console.log(profiles)

  // array of objects

  useEffect(() => {
    dispatch(fetchProfiles(bookId))
  }, [])

  const displayProfiles = profiles?.map((profile, index) => (
    <div key={profile.id + index}>
      <p>profiles here</p>
      <img src={profile.image} alt={`${profile.name}`}></img>
      <h1>Name:{profile.name}</h1>
    </div>
  ))
  console.log(displayProfiles)

  return (
    <>
      <div className='Title'>
        <h1 className={style.heading}>Yearbook Title</h1>
      </div>
      <div className='profiles_containers'>
        {displayProfiles}
        {/* <Profile profile={profiles} /> */}
      </div>
      <div className='comments_containers'>{/* <input>posts</input> */}</div>
    </>
  )
}
