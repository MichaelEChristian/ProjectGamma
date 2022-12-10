import React from 'react'
import Goth2 from '../images/Goth2.jpg'
import Goth3 from '../images/Goth3.jpg'
import Goth from '../images/Goth.jpg'

function GothicGrunge() {
  return (
    <div className="theme-modal">
      <h1 className="winter-h1">Gothic Grunge</h1>
      <p className="w-description">
        Gothic (or goth) weddings typically center around colors, themes, and
        decor that have a gothic sensibility — think black lace, deep red roses,
        and hauntingly beautiful venues. Gothic aesthetics stem from the
        namesake architecture that was popular in Europe during Medieval times
        from the 12th through 16th centuries.
      </p>
      <div className="themes-img-container">
        <img className="winter-theme-imgs" src={Goth} alt={"hi"} ></img>
        <img className="winter-theme-imgs" src={Goth2} alt={"hi"}></img>
        <img className="winter-theme-imgs" src={Goth3} alt={"hi"}></img>
      </div>
    </div>
  )
}

export default GothicGrunge
