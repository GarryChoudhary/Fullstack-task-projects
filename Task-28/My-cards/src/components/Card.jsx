import React from 'react'
import './Cards.css'

function Card({ card, image, title }) {
  return (
    <>
      <div className='main-container'>
        <div className="border">
          <div className="card">
            <img src={image} alt="Image" />
            <h2>{card}</h2>
            <p>{title}</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Card
