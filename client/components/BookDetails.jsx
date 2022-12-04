import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
// import Profile from './Profile'
import styles from './BookDetails.module.scss'
import { fetchProfiles, setProfiles, } from '../actions/profile'
import {fetchComments,setComments,submitComments} from "../actions/comment"

export default function BookDetails() {
  const params = useParams()
  const bookId = Number(params.bookid)
  const dispatch = useDispatch()
  const profiles = useSelector((state) => state.profiles)
  const comments = useSelector((state) => state.comments)
  const [comment, setComment] = useState({comment:'', bookId:bookId
})

  useEffect(() => {
    dispatch(fetchProfiles(bookId))
  }, [])

  useEffect(() => {
    dispatch(fetchComments(bookId))
  }, [])

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
          <li>{comments.ownerId} : {comments.comment}</li>
    </div>
    </ul>
  ))

  function handleChange(event) {
    setComment( {...comment,[event.target.name] : event.target.value } )
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(submitComments(comment))
    dispatch(fetchComments(bookId))
    setComment({ comment: '', bookId: bookId })
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
     
      <div> 
        <ul>
         {displayComments}
         </ul>
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
