from dbqueries.users_db import AccountsQueries
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import jwt
from passlib.context import CryptContext
from pydantic import BaseModel
import os

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/auth/signin", auto_error=False)  # noqa: E501

SECRET_KEY = os.environ["SECRET_KEY"]
ALGORITHM = "HS256"
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class UserSignUp(BaseModel):
    username: str
    password: str
    email: str | None = None
    firstname: str | None = None
    lastname: str | None = None


class LogInCredentials(BaseModel):
    username: str
    password: str


def decode_token(token):
    return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])


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
    token: str = Depends(oauth2_scheme),
    repo: AccountsQueries = Depends(),
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid authentication credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        decoded_token = decode_token(token)
        current_user = repo.get_user(decoded_token["username"])
        if not current_user:
            raise
        return current_user
    except:  # noqa: E722
        raise credentials_exception
