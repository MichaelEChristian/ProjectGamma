import React from 'react'
import Winter from '../images/Winter.jpg'
import Winter3 from '../images/Winter3.jpg'
import Winter2 from '../images/Winter2.webp'
import snowflake from '../images/Snowflake.webp'

function WinterWonderland() {
  return (
    <div>
        <img src={snowflake}></img>
        <h1>Winter Wonderland</h1>
            <p className="w-description">
            Enthrall your guests with a luxuriously enchanting and whimsical portrayal of a snowcapped, icicle wonderland. Think glistening whites and blue hues in drapes, linings and warm white lighting.
            </p>
    </div>
  )
}

export default WinterWonderland
