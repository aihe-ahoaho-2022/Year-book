import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
// import Profile from './Profile'
import { fetchProfiles, setProfiles } from '../actions/profile'

export default function BookDetails() {
  const params = useParams()
  const bookId = Number(params.bookid)
  const dispatch = useDispatch()
  // // const navigate = useNavigate()
  // const profiles = useSelector((state) => state.profiles)

  // array of objects

  useEffect(() => {
    dispatch(fetchProfiles(bookId))
  }, [])

  // const displayProfiles = profiles.map((profile, index) => (
  //   <div key={profile.id + index}>
  //     <h1>Name:{profile.name}</h1>
  //     <img src={profile.image} alt={`${profile.name}`}></img>
  //     <hr />
  //   </div>
  // ))
  // console.log(displayProfiles)

  return (
    <>
      <div className='Title'>
        <h1>Yearbook Title</h1>
      </div>
      <div className='profiles_containers'>
        {/* {displayProfiles} */}
        {/* <Profile profile={profiles} /> */}
      </div>
      <div className='comments_containers'>{/* <input>posts</input> */}</div>
    </>
  )
}
