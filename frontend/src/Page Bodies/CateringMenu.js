import { useState, useEffect } from 'react';


function Catering(props) {

  const [foodItems, setFoodItems] = useState([]);
  const [foodSummaries, setFoodSummaries] = useState([]);
  // const [foodImages, setFoodImages] = useState([]);
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
      const foodNameUrl = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${selectedCuisines.join(',')}&number=5&apiKey=4fd057b6fd424713b12753bc59f4b35b`;
      const foodNameResponse = await fetch(foodNameUrl);
      if (foodNameResponse.ok) {
        const data = await foodNameResponse.json();
        setFoodItems(data.results);
      }
    }
    async function getFoodSummaries() {
      const foodSummaryUrl = `https://api.spoonacular.com/recipes/${foodItems.id}/information?includeNutrition=false&&apiKey=4fd057b6fd424713b12753bc59f4b35b`
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

  console.log(foodItems)
  // console.log('test-------> SUMMARY', foodSummaries)

  return (
    <>
      <div className='container'>
        <div className='row row-cols-2'>
          <div className='col-50-auto'>
          
            <div className='container'>
              <div class="form-check" id="cuisine-container">
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
          </div>
          <section>
            <div class="col-50">
              <div class="container">
                <h1>Build your Menu</h1>
                <table class="table">
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
          </section>
        </div>
      </div>
    </>
  )
};

export default Catering
