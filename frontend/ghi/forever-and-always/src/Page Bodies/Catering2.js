import { useState, useEffect } from 'react';

function Catering2(props) {

  const [foodItems, setFoodItems] = useState([]);
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

  useEffect(() => {
    async function getFoodItemNames() {
      const filteredChoices = selectedCuisines.join(',')
      const foodNameUrl = `http://localhost:8000/catering?selectedCuisines=${filteredChoices}`;
      const foodNameResponse = await fetch(foodNameUrl);
      if (foodNameResponse.ok) {
        const data = await foodNameResponse.json();
        setFoodItems(data.results);
      }
    }
    async function getFoodSummaries() {
      const foodSummaryUrl = `https://api.spoonacular.com/recipes/${foodItems.id}/information?includeNutrition=false`
      const foodSummaryReponse = await fetch(foodSummaryUrl);
      if (foodSummaryReponse.ok) {
        const data = await foodSummaryReponse.json();
        setFoodSummaries(data)
      }
    }

    getFoodItemNames();
    getFoodSummaries();
  }, [selectedCuisines]
  )

  return (
    <div>
        <div className="cuisine-flexbox">
            <div id='choice-container'>
              <div id="cuisine-container">
                {cuisineOptions.map((cuisine) => {
                  return (
                    <div class="indiv-options">
                      <input class="form-check-input" type="checkbox" key={cuisine.id} value={cuisine}
                        onChange={e => {
                          if (selectedCuisines.includes(cuisine)) {
                            const newSelectedCuisines = selectedCuisines.filter((selectedCuisine) => cuisine !== selectedCuisine);
                            setSelectedCuisines(newSelectedCuisines)
                            console.log(newSelectedCuisines)
                          }
                          else {
                            setSelectedCuisines([...selectedCuisines, e.target.value])
                          }
                        }} id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault"> {cuisine} </label>
                    </div>
                  )
                })}
            </div>
        </div>
            <div className="body-container">
                <h1>Build your Menu</h1>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Cuisine</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foodItems.map((foodItem) => {
                      return (
                        <tr key={foodItem.id}>
                          <td>{foodItem.title}</td>
                          <td><img src={foodItem.image} alt={foodItem.title} /></td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
            </div>
        </div>
    </div>
  )
};
  export default Catering2
