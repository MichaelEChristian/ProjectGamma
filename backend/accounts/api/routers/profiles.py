from fastapi import APIRouter, Depends
import os
from fastapi.security import OAuth2PasswordBearer
from dbqueries.profiles_db import ProfileQueries
from schemas.profiles import Profile
from pydantic import BaseModel
from schemas.profiles import Profile, ProfileUpdate
from library.auth import get_current_user

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token", auto_error=False)

router = APIRouter()
SECRET_KEY = os.environ["SECRET_KEY"]
ALGORITHM = "HS256"


class ErrorMessage(BaseModel):
    message: str


@router.get(
    "/api/user/profile",
    response_model=Profile,
    responses={200: {"model": Profile}, 400: {"model": ErrorMessage}},
)
def get_profile(current_user = Depends(get_current_user), query=Depends(ProfileQueries)):
    rows = query.get_profile(current_user["username"])
    return rows

@router.put("/api/user/profile")
def update_profile(profile: ProfileUpdate, query=Depends(ProfileQueries)):
    query.update_profile(profile.spouse, profile.budget, profile.state, profile.id)
