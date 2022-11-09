import uvicorn
from fastapi import FastAPI
from app.auth.model import RestaurantSchema


app = FastAPI()

restaurants = {
    1: {
        "name:": "Torchys",
        "price_point:": "$"
    }
}


@app.get("/", tags = ["yelp restaurants"])
def get_restaurants():
    return restaurants
