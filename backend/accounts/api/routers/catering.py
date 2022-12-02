from .keys import key
import httpx
from fastapi import APIRouter


router = APIRouter()

@router.get("/menu/all/")
async def get_all_recipes(selectedCuisines: str):
    return httpx.get(f"https://api.spoonacular.com/recipes/complexSearch?cuisine={selectedCuisines}&number=5&apiKey={key}").json()


@router.get("/menu/all/")
async def get_all_recipe_summaries(foodItemsID: int):
    return httpx.get(f"https://api.spoonacular.com/recipes/${foodItemsID}/information?includeNutrition=false&&apiKey={key}")
