import React from 'react'
import styles from './Book.module.scss'
import { Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

export default function Book(props) {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/' + props.bookData.id)
  }

  function handleEditClick() {
    navigate('/' + props.bookData.id + '/edit')
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerRow}>
        <h1 className={styles.heading}>{props.bookData.name}</h1>
        <Button
          variant='gradient'
          gradient={{ from: 'blue', to: 'green' }}
          size='lg'
          className={styles.button}
          onClick={() => {
            handleEditClick()
          }}
        >
          edit
        </Button>
        <Button
          variant='gradient'
          gradient={{ from: 'blue', to: 'green' }}
          size='lg'
          className={styles.button}
          onClick={() => {
            handleEditClick()
          }}
        >
          delete
        </Button>
      </div>
      
        
      
      <div
        role='button'
        onClick={() => {
          handleClick()
        }}
        onKeyDown={() => {
          handleClick()
        }}
        tabIndex={0}
        style={{ cursor: 'pointer' }}
      >
        <img
          className={styles.image}
          src={props.bookData.image}
          style={styles}
          alt={props.bookData.image}
        />
      </div>
    </div>
  )
}
