import httpx
from fastapi import APIRouter
import os

YELP_API_KEY = os.environ["YELP_API_KEY"]


router = APIRouter()


@router.get("/api/destination/")
async def get_all_destinations(selctedStates: str):
    headers = {
        "Authorization": f"Bearer {YELP_API_KEY}",
    }
    yelp_response = httpx.get(
        f"https://api.yelp.com/v3/businesses/search?location={selctedStates}&term=wedding%20venue&sort_by=best_match&limit=15",  # noqa: E501
        headers=headers,
    ).json()
    return yelp_response
