import React, { useState, useEffect } from 'react'
import { FaCreativeCommons } from 'react-icons/fa'

const API_KEY = 'd8a44ecf2053438683de90bd4d001e71'

function MenuAll() {
  const [menu, setMenu] = useState([])
  const apiKey = API_KEY

  async function getMenuAll() {
    let menuAllURL = `https://api.spoonacular.com/recipes/complexSearch?number=20&apiKey=${apiKey}`
    console.log(menuAllURL)
    try {
      const response = await fetch(menuAllURL)
      console.log('response:', response)
      const listOfRecipes = await response.json()
      console.log('list of recipes', listOfRecipes)
      setMenu(listOfRecipes)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getMenuAll()
  }, [])

  return <div>Menu All </div>
}

export default MenuAll
