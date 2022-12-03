import { useState, useEffect } from 'react';

function Catering2(props) {
  const [foodItems, setFoodItems] = useState([]);
  // const [foodSummaries, setFoodSummaries] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState(["American"]);
  const [newSelectedCuisines, setNewSelectedCuisines] = useState([]);

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
      // const filteredChoices = selectedCuisines.join(',')

      // if (filteredChoices === "") {
      //   setSelectedCuisines(["American"]);
      //   console.log("inside if:", selectedCuisines)
      // }
      // setSelectedCuisines(filteredChoices);
      console.log("outside if:", selectedCuisines)
      const foodNameUrl = `http://localhost:8000/menu/all/?selectedCuisines=${selectedCuisines.join(',')}`;
      // console.log("food url",  foodNameUrl)
      const foodNameResponse = await fetch(foodNameUrl);
      if (foodNameResponse.ok) {
        const data = await foodNameResponse.json();
        setFoodItems(data.results);
      }
    }
    // async function getFoodSummaries() {
    //   const foodSummaryUrl = `https://localhost:8000/recipes/${foodItems.id}/information?includeNutrition=false`
    //   const foodSummaryReponse = await fetch(foodSummaryUrl);
    //   if (foodSummaryReponse.ok) {
    //     const data = await foodSummaryReponse.json();
    //     setFoodSummaries(data)
    //   }
    // }
    getFoodItemNames();
    // getFoodSummaries();
  }, [selectedCuisines]
  )



  return (
    <div>
      <div className="cuisine-flexbox">
        <div id='choice-container'>
          <div id="cuisine-container">
            {cuisineOptions.map((cuisine) => {
              return (
                <div className="indiv-options">
                  <input className="form-check-input" type="checkbox" key={cuisine.id} value={cuisine}
                    onChange={e => {
                      if (!selectedCuisines.includes(cuisine)) {
                        console.log("state--->", selectedCuisines)
                        console.log("e---->", e.target.value)
                        setSelectedCuisines([...selectedCuisines, e.target.value])
                      }
                      else {
                        setSelectedCuisines(newSelectedCuisines.filter((selectedCuisine) => cuisine !== selectedCuisine))
                        }
                  }} id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault"> {cuisine} </label>
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
                <th>Image</th>
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

                      // if (selectedCuisines.includes(cuisine)) {
                    //   const newSelectedCuisines = selectedCuisines.filter((selectedCuisine) => cuisine !== selectedCuisine);
                    //   setSelectedCuisines(newSelectedCuisines)
                    //   console.log(newSelectedCuisines)
                    // }
                    // else {
                    //   setSelectedCuisines([...selectedCuisines, e.target.value])
                    // }
