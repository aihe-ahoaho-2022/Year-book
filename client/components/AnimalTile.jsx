import React from 'react'
import styles from './AnimalTile.module.scss'

export default function AnimalTile({animal, clickHandler = () => {}}) {
  if(!animal) {throw Error("AnimalTile needs to be passed an animal prop")}
  const {id, imageUrl, description, name} = animal

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      clickHandler(id)
    }
  }

  return (
    <div className={styles.tile} onClick={() => clickHandler(id)} onKeyPress={handleKeyPress} role="button" tabIndex="0">
      <div >
        <img className={styles.img} src={imageUrl} alt={description} />
      </div>
      <div className={styles.textBox} >
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
      </div> 
    </div>
  )
}
