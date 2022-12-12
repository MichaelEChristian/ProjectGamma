from fastapi import APIRouter
import os
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token", auto_error=False)

router = APIRouter()
SECRET_KEY = os.environ.get("SECRET_KEY")
ALGORITHM = "HS256"


class HttpError(BaseModel):
    detail: str


class Username(BaseModel):
    usernames: list

    class Config:
        orm_mode = True
