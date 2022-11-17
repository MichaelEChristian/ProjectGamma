import React, {useState} from 'react'

function MenuAll() {

    const [menu, setMenu] = useState([])

    async function getMenuAll() {
        let menuAllURL = "https://api.spoonacular.com/recipes/complexSearch"
    }

  return (
    <div>MenuAll</div>
  )
}

export default MenuAll
