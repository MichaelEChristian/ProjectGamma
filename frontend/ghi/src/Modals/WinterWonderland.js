import React from 'react'
import Winter from '../images/Winter.jpg'
import Winter3 from '../images/Winter3.jpg'
import Winter2 from '../images/Winter2.webp'
import snowflake from '../images/Snowflake.webp'

function WinterWonderland() {
  return (
    <div className="theme-modal">
      <img className="snowflake" src={snowflake}></img>
      <img className="snowflake-2" src={snowflake}></img>
      <h1 className="winter-h1">Winter Wonderland</h1>
      <p className="w-description">
        Enthrall your guests with a luxuriously enchanting and whimsical
        portrayal of a snowcapped, icicle wonderland. Think glistening whites
        and blue hues in drapes, linings and warm white lighting.
      </p>
      <div className="themes-img-container">
        <img className="winter-theme-imgs" src={Winter}></img>
        <img className="winter-theme-imgs" src={Winter2}></img>
        <img className="winter-theme-imgs" src={Winter3}></img>
      </div>
    </div>
  )
}

export default WinterWonderland
