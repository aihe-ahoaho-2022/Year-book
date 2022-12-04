import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
// import Profile from './Profile'
import styles from './BookDetails.module.scss'
import { fetchProfiles, setProfiles, } from '../actions/profile'
import {fetchComments} from "../actions/comment"

export default function BookDetails(data) {
  const params = useParams()
  const navigate = useNavigate()
  const bookId = Number(params.bookid)
  const dispatch = useDispatch()
  // const [isLoading, setIsLoading] = useState(true)
  // // const navigate = useNavigate()
  const profiles = useSelector((state) => state.profiles)
  const comments = useSelector((state) => state.comments)
  console.log(comments)

  // array of objects

  useEffect(() => {
    dispatch(fetchProfiles(bookId))
  }, [])

  useEffect(() => {
    dispatch(fetchComments(bookId))
  }, [])

  // function addAnimalToRedux(animal) {
  //   dispatch(updateAnimals(animal))
  //   navigate(`/final/${profile.id}`)
  // }
  // function handleClick (event){

  // }

  const displayProfiles = profiles?.map((profile) => (
    <ul key={profile.id}>
      <Link to={`/profiles/${profile.id}`}>
        <div className={styles.profiles}>
          <img
            className={styles.image}
            src={profile.image}
            alt={`${profile.name}`}
          ></img>
          <h1>Name:{profile.name}</h1>
          <span className={styles.quoteHover}>Quote:{profile.quote}</span>
        </div>
      </Link>
    </ul>
  ))

  const displayComments = comments?.map((comments) => (
    <ul key={comments.id}>
      <div>
        <p>{comments.comment}</p>
    </div>
    </ul>
  ))

  

  return (
    <>
      <div className='Title'>
        <h1 className={styles.heading}>Yearbook Title</h1>
      </div>

      <div className={styles.container_profiles}>{displayProfiles}</div>
      <Link to={`/${bookId}/add`}>
        <div className={styles.container_profiles}>AddNew</div>
      </Link>

      <div className='comments_containers'>{displayComments}</div>
      
     
    </>
  )
}
