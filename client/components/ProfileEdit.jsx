import React, { useState } from 'react'

export default function FruitEditor(props) {
  // Ready up React state
  const [quote, setQuote] = useState({ name: "", description: "" })
  const [name, setName ] = useState({ name: "", description: "" })

  
  const handleSubmit = e => {
    e.preventDefault();
    console.log(quote, name);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <p>Create Editor:</p>
          <ul>
            <li>
              Name:
              <input
                value={quote.name}
                onChange={e => setQuote({
                  ...quote,
                  name: e.target.value
                })}
              ></input>
            </li>
            <li>
              Description:
              <input
                value={  const [quote, setQuote] = useState({ name: "", description: "" })
                .description}
                onChange={e => setQuote({
                  ...quote,
                  description: e.target.value
                })}
              ></input>
            </li>
          </ul>
          <button type="submit" >Save</button>
        </form>
      </div>
    </>
  )

}
