import React from 'react'
import Garden2 from '../images/Garden2.jpg'
import Garden from '../images/Garden.jpg'

function GardenGlades() {
  return (
    <div className="theme-modal">
      <h1 className="winter-h1">Garden Glades</h1>
      <p className="w-description">
        A garden wedding means you're already surrounded by beautiful flowers
        and other greenery. You won't need to bring flowers in to put at the end
        of the pews or surround you and your beloved. Instead, the natural
        beauty serves as the ambiance for the wedding.
      </p>
      <div className="themes-img-container">
        <img className="winter-theme-imgs" src={Garden} alt={"hi"}></img>
        <img className="winter-theme-imgs" src={Garden2} alt={"hi"}></img>
      </div>
    </div>
  )
}

export default GardenGlades
