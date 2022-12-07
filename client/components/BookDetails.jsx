import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import styles from './BookDetails.module.scss'
import { IfAuthenticated } from './Authenticated'
import { fetchProfiles } from '../actions/profile'
import { fetchBook } from '../actions/book'
import { fetchComments, submitComments } from '../actions/comment'
import { useAuth0 } from '@auth0/auth0-react'

export default function BookDetails() {
  const { getAccessTokenSilently, user } = useAuth0()
  const params = useParams()
  const bookId = Number(params.bookid)
  const dispatch = useDispatch()
  const profiles = useSelector((state) => state.profiles)
  const comments = useSelector((state) => state.comments)
  const bookData = useSelector((state) => state.books)
  const [comment, setComment] = useState({
    comment: '',
    bookId: bookId,
  })

  useEffect(() => {
    dispatch(fetchProfiles(bookId))
    dispatch(fetchBook(bookId))
    dispatch(fetchComments(bookId))
  }, [])

  const displayProfiles = profiles?.map((profile) => (
    <div key={profile.id} className={styles.card_wrapper}>
      <Link to={`/profiles/${profile.id}`}>
        <div className={styles.card}>
          <img
            className={styles.image}
            src={profile.image}
            alt={`${profile.name}`}
          ></img>
          <h3 className={styles.name}>Name:{profile.name}</h3>
          <div className={styles.text}>
            <p>
              Quote:
              <br />
              {profile.quote}
              Click to edit!
            </p>
          </div>
        </div>
      </Link>
    </div>
  ))

  const displayComments = comments?.map((comments, index) => (
    <ul key={index}>
      <li>
        {comments.ownerId} : {comments.comment}
      </li>
    </ul>
  ))

  function handleChange(event) {
    setComment({ ...comment, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    getAccessTokenSilently()
      .then((token) => {
        dispatch(submitComments({ ...comment, ownerId: user.nickname }, token))
      })
      .catch((e) => console.log(e))
    setComment({ comment: '', bookId: bookId })
  }

  return (
    <>
      <h1 className={styles.heading}>{bookData.name}</h1>
      <br />
      <div className={styles.container}>
        {displayProfiles}
        <Link to={`/${bookId}/add`}>
          <div className={styles.card_wrapper}>
            <div className={styles.card}>
              <img
                className={styles.image}
                src='https://blush.design/api/download?shareUri=XQMeVJiJO&w=800&h=800&fm=png'
                alt='Add New'
              ></img>
              <h3>Add New</h3>
            </div>
          </div>
        </Link>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <h2>Post your comments below:</h2>
      <div className={styles.container}>
        <div className={styles.comments}>
          {displayComments}
          <form onSubmit={handleSubmit}>
            <input
              required
              label='comment'
              name='comment'
              value={comment.comment}
              onChange={handleChange}
            ></input>
            <br />
            <br />
            <IfAuthenticated>
              <button>Post</button>
            </IfAuthenticated>
          </form>
        </div>
      </div>
    </>
  )
}
