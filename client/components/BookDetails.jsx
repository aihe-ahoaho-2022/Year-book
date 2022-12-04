import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
// import Profile from './Profile'
import styles from './BookDetails.module.scss'
import { fetchProfiles, setProfiles, } from '../actions/profile'
import {fetchComments,setComments,submitComments} from "../actions/comment"

export default function BookDetails(data) {
  const params = useParams()
  const navigate = useNavigate()
  const bookId = Number(params.bookid)
  const dispatch = useDispatch()
  const profiles = useSelector((state) => state.profiles)
  const comments = useSelector((state) => state.comments)
  const [comment, setComment] = useState({comment:'',bookId:bookId
})

  // array of objects

  useEffect(() => {
    dispatch(fetchProfiles(bookId))
  }, [])

  useEffect(() => {
    dispatch(fetchComments(bookId))
  }, [])

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

  function handleChange(event) {
   console.log( event.target)
    setComment( {...comment,[event.target.name] : event.target.value } )
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(submitComments(comment))
    dispatch(fetchComments(bookId))
    console.log(comment)
  }

  return (
    <>
      <div className='Title'>
        <h1 className={styles.heading}>Yearbook Title</h1>
      </div>

      <div className={styles.container_profiles}>{displayProfiles}</div>
      <Link to={`/${bookId}/add`}>
        <div className={styles.container_profiles}>AddNew</div>
      </Link>
      <p>{displayComments}</p>
      {/* <div className='comments_containers'>{displayComments}</div> */}
      <div>
        <form onSubmit={handleSubmit}>
          <ul>
            <input
              label='comment'
              name='comment'
              value={comment.comment}
              onChange={handleChange}
            ></input>
            <button>Save</button>
          </ul>
        </form>
      </div>
    </>
  )
}
