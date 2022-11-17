import React from 'react'
import new_collage from "../images/new_collage.jpg"


function Main() {
  return (
    <div>
      <div class="card text-white">
        <img src={new_collage} id="wedding-new_collage" class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h1 class="card-title">What ever we want to write</h1>
        </div>
      </div>
      <div>Main Page Component</div>
    </div>
  )
}

export default Main
