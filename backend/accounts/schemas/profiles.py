from fastapi import APIRouter, Response, status, Depends, HTTPException
from psycopg.errors import UniqueViolation
from pydantic import BaseModel
from jose import jwt
import os
from fastapi.security import OAuth2PasswordBearer
from dbqueries.users_db import AccountsQueries

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token", auto_error=False)

router = APIRouter()
SECRET_KEY = os.environ["SECRET_KEY"]
ALGORITHM = "HS256"

class Profile(BaseModel):
    username: str
    spouse: str
    budget: int
    state: str
