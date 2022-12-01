import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import styles from './ProfileDetails.module.scss'

export default function ProfileDetails() {
  // const { id } = useParams()
  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  // const profiles = useSelector((state) => state.profiles)

  // const currentProfile = profiles.find((profile) => profile.id == id)

  return (
    <>
      <div className={styles.container}>
        {/* <img src={`/images/${currentProfile.image}`} alt='Profile' /> */}
        <img
          className={styles.image}
          src='/images/1669849500283.jpg'
          alt='filler pic'
        />
        <section className={styles.textbox}>
          <h1 className={styles.heading}>Frank</h1>
          <h2>Quote: Gimme a mussel treat</h2>
          <h2>
            Frank is a very good boy. He has sore legs so needs to be carried
            but pretty sure he doesn't mind that.
          </h2>
          <ul className={styles.list}>
            <li>linkedin:</li>
            <li>twitter:</li>
            <li>instagram:</li>
            <li>facebook:</li>
            <li>
              github: <a href='https://github.com/ben-bwilly-williams'>Frank</a>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
