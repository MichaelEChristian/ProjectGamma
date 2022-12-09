import { useState, useEffect } from 'react';

function Catering(props) {
  const [foodItems, setFoodItems] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
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
      const foodNameUrl = `http://localhost:8000/menu/all/?selectedCuisines=${selectedCuisines.join(',')}`;
      const foodNameResponse = await fetch(foodNameUrl);
      if (foodNameResponse.ok) {
        const data = await foodNameResponse.json();
        setFoodItems(data.results);
        console.log(data.results);
      }
    }
    getFoodItemNames();
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
              </tr>
            </thead>
            <tbody>
              {foodItems.map((foodItem) => {
                return (
                <tr key={foodItem.id}>
                  <td>
                    <div class="card" >
                      <img src={foodItem.image} alt={foodItem.title} class="card-img-top"/>
                      <div class="card-body">
                        <h5 class="card-title">{foodItem.title}</h5>
                        <br/>
                        <button type="button" class="btn btn-lg btn-primary" disabled>Add to Menu +</button>
                      </div>
                    </div>
                  </td>
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

export default Catering
