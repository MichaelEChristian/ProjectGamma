import React from 'react'
import Beach2 from '../images/Beach2.png'
import Beach3 from '../images/Beach3.jpg'
import Beach from '../images/Beach.jpeg'

function BohoBeach() {
  return (
    <div className="theme-modal">
        <h1 className="winter-h1">Boho Beach</h1>
            <p className="w-description">
                Getting married at the beach, this wedding style is all about
                pairing nature-inspired details (seashells, driftwood, tropical flowers, etc.)
                with laid-back elements to create a casual, easygoing, boho aesthetic
            </p>
            <div className="themes-img-container">
              <img className="winter-theme-imgs" src={Beach}></img>
              <img className="winter-theme-imgs" src={Beach2}></img>
              <img className="winter-theme-imgs" src={Beach3}></img>
            </div>
    </div>
  )
}

export default BohoBeach
