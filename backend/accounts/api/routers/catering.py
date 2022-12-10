from .keys import key
import httpx
from fastapi import APIRouter
import os

SPOONACULAR_API_KEY = os.environ["SPOONACULAR_API_KEY"]


router = APIRouter()

@router.get("/menu/all/")
async def get_all_recipes(selectedCuisines: str):
    return httpx.get(f"https://api.spoonacular.com/recipes/complexSearch?cuisine={selectedCuisines}&number=5&apiKey={SPOONACULAR_API_KEY}").json()


# @router.get("/menu/all/")
# async def get_all_recipe_summaries(foodItemsID: int):
#     return httpx.get(f"https://api.spoonacular.com/recipes/${foodItemsID}/information?includeNutrition=false&&apiKey={key}").json()
