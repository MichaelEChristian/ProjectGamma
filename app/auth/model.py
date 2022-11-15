from pydantic import BaseModel, Field
from fastapi import APIRouter

router = APIRouter()

class RestaurantSchema(BaseModel):
    name : str = Field(default=None)
    price_point : str = Field(default=None)


@router.get("/api/users/", response_model=UserOut)
def users_list():
    return {
        "users": []
    }
