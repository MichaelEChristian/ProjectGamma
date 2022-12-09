from fastapi import APIRouter, Response, status, Depends, HTTPException
from jose import jwt
import os
from fastapi.security import OAuth2PasswordBearer
from dbqueries.profiles_db import ProfileQueries
from schemas.profiles import Profile
from pydantic import BaseModel


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token", auto_error=False)

router = APIRouter()
SECRET_KEY = os.environ["SECRET_KEY"]
ALGORITHM = "HS256"

class ErrorMessage(BaseModel):
    message: str

@router.get(
    "/api/user/profile/",
    response_model = Profile,
    responses = {
        200: {"model": Profile},
        400: {"model": ErrorMessage}
    }
)
def get_profile(
    query=Depends(ProfileQueries)
    ):
    rows = query.get_profile()
    return rows
