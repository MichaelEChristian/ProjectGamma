from fastapi import APIRouter
from pydantic import BaseModel
import os
from fastapi.security import OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token", auto_error=False)

router = APIRouter()
SECRET_KEY = os.environ["SECRET_KEY"]
ALGORITHM = "HS256"


class Profile(BaseModel):
    username: str
    spouse: str
    budget: int
    state: str
