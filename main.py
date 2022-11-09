import uvicorn
from fastapi import FastAPI
from app.auth.model import RestaurantSchema


app = FastAPI()

restaurants = {
    "food_places": tuple([
        {
            "name:": "Torchys",
            "price_point:": "$"
        },

        {
            "name:": "Hometown",
            "price_point:": "$$"
        }
    ])
}


@app.get("/", tags = ["yelp restaurants"])
def get_restaurants():
    return {"restaurants:", restaurants}
