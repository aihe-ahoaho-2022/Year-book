import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
// import Profile from './Profile'
import styles from './BookDetails.module.scss'
import { fetchProfiles, setProfiles } from '../actions/profile'
import { style } from '@mui/system'

export default function BookDetails(data) {
  const params = useParams()
  const navigate = useNavigate()
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

  // function addAnimalToRedux(animal) {
  //   dispatch(updateAnimals(animal))
  //   navigate(`/final/${profile.id}`)
  // }
  // function handleClick (event){

  // }

  const displayProfiles = profiles?.map((profile) => (
    <div key={profile.id} className={styles.card}>
      <Link to={`/profiles/${profile.id}`}>
        <div className={styles.profiles}>
          <img
            className={styles.image}
            src={profile.image}
            alt={`${profile.name}`}
          ></img>
          <h3>Name:{profile.name}</h3>
          <div className={styles.text}>
            <span>Quote:{profile.quote}</span>
          </div>
        </div>
      </Link>
    </div>
  ))
  console.log(displayProfiles)

  return (
    <>
      <div className='Title'>
        <h1 className={styles.heading}>Yearbook Title</h1>
      </div>

      <div className={styles.container}>
        {displayProfiles}
        <Link to={`/${bookId}/add`}>
          <div className={styles.card}>
            <div className={styles.profiles}>
              <img
                className={styles.image}
                src='https://blush.design/api/download?shareUri=XQMeVJiJO&w=800&h=800&fm=png'
                alt='Add New'
              ></img>
              <div className={styles.text}>
                <h3>Add New</h3>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className='comments_containers'>{/* <input>posts</input> */}</div>
    </>
  )
}
