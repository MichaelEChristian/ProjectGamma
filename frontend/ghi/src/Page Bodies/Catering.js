import { useState, useEffect } from 'react'

function Catering(props) {
  const [foodItems, setFoodItems] = useState([])
  const [foodSummaries, setFoodSummaries] = useState([])
  // const [foodImages, setFoodImages] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([])

  const cuisineOptions = [
    'African',
    'American',
    'British',
    'Cajun',
    'Caribbean',
    'Chinese',
    'Eastern European',
    'European',
    'French',
    'German',
    'Greek',
    'Indian',
    'Irish',
    'Italian',
    'Japanese',
    'Jewish',
    'Korean',
    'Latin American',
    'Mediterranean',
    'Mexican',
    'Middle Eastern',
    'Nordic',
    'Southern',
    'Spanish',
    'Thai',
    'Vietnamese',
  ]

  useEffect(() => {
    async function getFoodItemNames() {
      const foodNameUrl = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${selectedCuisines.join(
        ','
      )}&number=5&apiKey=4fd057b6fd424713b12753bc59f4b35b`
      const foodNameResponse = await fetch(foodNameUrl)
      if (foodNameResponse.ok) {
        const data = await foodNameResponse.json()
        setFoodItems(data.results)
      }
    }
    async function getFoodSummaries() {
      const foodSummaryUrl = `https://api.spoonacular.com/recipes/${foodItems.id}/information?includeNutrition=false&&apiKey=4fd057b6fd424713b12753bc59f4b35b`
      const foodSummaryReponse = await fetch(foodSummaryUrl)
      if (foodSummaryReponse.ok) {
        const data = await foodSummaryReponse.json()
        setFoodSummaries(data)
      }
    }

    getFoodItemNames()
    getFoodSummaries()
  }, [selectedCuisines])

  console.log(foodItems)
  console.log('test-------> SUMMARY', foodSummaries)

  return (
    <>
      <div class="cuisine-container">
        <div class="form-check" id="cuisine-container">
          {cuisineOptions.map((cuisine) => {
            return (
              <div class="indiv-options">
                <input
                  class="form-check-input"
                  type="checkbox"
                  key={cuisine.id}
                  value={cuisine}
                  onChange={(e) => {
                    if (selectedCuisines.includes(cuisine)) {
                      const newSelectedCuisines = selectedCuisines.filter(
                        (selectedCuisine) => cuisine !== selectedCuisine
                      )
                      setSelectedCuisines(newSelectedCuisines)
                      console.log(newSelectedCuisines)
                    } else {
                      setSelectedCuisines([...selectedCuisines, e.target.value])
                    }
                  }}
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  {' '}
                  {cuisine}{' '}
                </label>
              </div>
            )
          })}
          ;
        </div>
      </div>
      <section class="main-content">
        <div class="container">
          <h1 class="text-center text-uppercase">Food Order Card</h1>
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-4">
              <div class="food-card">
                <div class="food-card_img">
                  <img src="https://i.imgur.com/eFWRUuR.jpg" alt="" />
                  <a href="#!">
                    <i class="far fa-heart"></i>
                  </a>
                </div>
                <div class="food-card_content">
                  <div class="food-card_title-section">
                    <a href="#!" class="food-card_title">
                      Double Cheese Potato Burger
                    </a>
                    <a href="#!" class="food-card_author">
                      Burger
                    </a>
                  </div>
                  <div class="food-card_bottom-section">
                    <div class="space-between">
                      <div>
                        <span class="fa fa-fire"></span> 220 - 280 Kcal
                      </div>
                      <div class="pull-right">
                        <span class="badge badge-success">Veg</span>
                      </div>
                    </div>
                    <div class="space-between">
                      <div class="food-card_price">
                        <span>5.99$</span>
                      </div>
                      <div class="food-card_order-count">
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <button
                              class="btn btn-outline-secondary minus-btn"
                              type="button"
                              id="button-addon1"
                            >
                              Add to Favs
                            </button>
                          </div>
                          <input
                            type="text"
                            class="form-control input-manulator"
                            placeholder=""
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"
                            value="0"
                          />
                          <div class="input-group-append">
                            <button
                              class="btn btn-outline-secondary add-btn"
                              type="button"
                              id="button-addon1"
                            >
                              <i class="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div>
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <img
                  src="https://food.fnr.sndimg.com/content/dam/images/food/products/2022/3/11/rx_goldbelly-clinton-street-diner-zeus-burger.jpg.rend.hgtvcom.406.305.suffix/1647019464547.jpeg"
                  width="200px"
                  height="200px"
                />
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <img
                  src="https://food.fnr.sndimg.com/content/dam/images/food/products/2022/3/11/rx_goldbelly-clinton-street-diner-zeus-burger.jpg.rend.hgtvcom.406.305.suffix/1647019464547.jpeg"
                  width="200px"
                  height="200px"
                />
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Catering
