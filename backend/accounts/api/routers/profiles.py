from fastapi import APIRouter, Depends
from dbqueries.profiles_db import ProfileQueries
from pydantic import BaseModel
from schemas.profiles import Profile, ProfileUpdate
from library.auth import get_current_user

router = APIRouter()


class ErrorMessage(BaseModel):
    message: str


@router.get(
    "/api/user/profile",
    response_model=Profile,
    responses={200: {"model": Profile}, 400: {"model": ErrorMessage}},
)
def get_profile(
    current_user=Depends(get_current_user),
    query=Depends(ProfileQueries)
):
    rows = query.get_profile(current_user["username"])
    return rows


@router.put("/api/user/profile")
def update_profile(
    profile: ProfileUpdate,
    query=Depends(ProfileQueries),
    current_user=Depends(get_current_user)
):
    query.update_profile(
        profile.spouse,
        profile.budget,
        profile.state,
        profile.id,
        current_user["username"])
