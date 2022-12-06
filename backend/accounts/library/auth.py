from user_db import AccountsQueries
from fastapi import (Depends, HTTPException, status, Cookie)
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel
from typing import List, Optional
import os

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token", auto_error=False)

SECRET_KEY = os.environ["SECRET_KEY"]
ALGORITHM = "HS256"
COOKIE_NAME = "fastapi_access_token"

class AccessToken(BaseModel):
    token: str

class UserSignUp(BaseModel):
    username: str
    password: str
    email: str | None = None
    firstname: str | None = None
    lastname: str | None = None

class LogInCredentials(BaseModel):
    username: str
    password: str

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password):
  return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def authenticate_user(repo: AccountsQueries, username: str, password: str):
    user = repo.get_user(username)
    if not user:
        return (False, None)
    if not verify_password(password, user["password"]):
        return (False, None)
    return (True, user)


def create_access_token(data: dict):
   to_encode = data.copy()
   encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
   return encoded_jwt


async def get_current_user(
    bearer_token: Optional[str] = Depends(oauth2_scheme),
    cookie_token: Optional[str] | None = (
        Cookie(default=None, alias=COOKIE_NAME)
    ),
    repo: AccountsQueries = Depends(),
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid authentication credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    token = bearer_token
    if not token and cookie_token:
        token = cookie_token
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("username")
        if username is None:
            raise credentials_exception
    except (JWTError, AttributeError):
        raise credentials_exception
    user = repo.get_user(username)
    if user is None:
        raise credentials_exception
    return user
