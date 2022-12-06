import React from 'react'

export default function Profile(profiles) {
  console.log(profiles)

  return (
    <>
      <h1>Profile :D</h1>
      <div key={profiles.id}>
        <img src={profiles.image} alt={profiles.name}></img>
        <h1>name:{profiles.name}</h1>
      </div>
    </>
  )
}
