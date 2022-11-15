import uvicorn
from fastapi import FastAPI
from app.auth.model import RestaurantSchema
# from routers import users

app = FastAPI()

# app.include_router(users.router)
restaurants = {
    1: {
        "name:": "Torchys",
        "price_point:": "$"
    }
}


#@router.get('/api/users')

@app.get("/", tags = ["yelp restaurants"])
def get_restaurants():
    return restaurants
