from .keys import yelp_key
import httpx
from fastapi import APIRouter


router = APIRouter()

@router.get("/destination/")
async def get_all_destinations(selctedStates: str):
    headers = {"Authorization": f"Bearer {yelp_key}",}
    yelp_response = httpx.get(f'https://api.yelp.com/v3/businesses/search?location={selctedStates}&term=wedding%20venue&sort_by=best_match&limit=15', headers=headers).json()
    return yelp_response
