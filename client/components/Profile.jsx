import React from 'react'

export default function Profile(props) {
  console.log(props)

  return (
    <>
      <h1>Profile :D</h1>
      <div key={props.id}>
        <img src={props.profile.image} alt={props.profile.name}></img>
        <h1>name:{props.profile.name}</h1>
      </div>
    </>
  )
}
