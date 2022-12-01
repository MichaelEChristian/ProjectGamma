import { useState, useEffect } from 'react';


function CateringVegan() {

  const [veganRecipes, setVeganRecipes] = useState([]);
  const [foodSummaries, setFoodSummaries] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  const cuisineOptions = [
    'American',
    'British',
    'Caribbean',
    'Chinese',
    'French',
    'Indian',
    'Italian',
    'Japanese',
    'Korean',
    'Latin American',
    'Mediterranean',
    'Mexican',
    'Spanish',
    'Thai',
    'Vietnamese',
  ]

  async function getVeganFoodRecipes() {
    const veganFoodsUrl = ``;
    const veganFoodResponse = await fetch(veganFoodsUrl);
    if (veganFoodResponse.ok) {
      const data = await veganFoodResponse.json();
      setVeganRecipes(data.results);
    }
  }

  return (
    <div>CateringVegan</div>
  )
}

export default CateringVegan
