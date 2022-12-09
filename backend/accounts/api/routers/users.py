from fastapi import APIRouter, Response, status, Depends, HTTPException
from jose import jwt
import os
from fastapi.security import OAuth2PasswordBearer
from dbqueries.profiles_db import ProfileQueries
from dbqueries.users_db import AccountsQueries
from schemas.profiles import Profile
from pydantic import BaseModel
from schemas.users import User


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token", auto_error=False)

router = APIRouter()
SECRET_KEY = os.environ["SECRET_KEY"]
ALGORITHM = "HS256"

class HttpError(BaseModel):
    detail: str

class Username(BaseModel):
    usernames: list
    class Config:
        orm_mode = True
