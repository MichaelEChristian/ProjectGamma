from user_db import AccountsQueries
from fastapi import (Depends, HTTPException, status, Response, Cookie, APIRouter, Request)
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt, jws, JWSError
from passlib.context import CryptContext
from pydantic import BaseModel
from typing import List, Optional
import os

SECRET_KEY = os.environ["SECRET_KEY"]
ALGORITHM = "HS256"
COOKIE_NAME = "fastapi_access_token"

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token", auto_error=False)


class HttpError(BaseModel):
    detail: str


class TokenData(BaseModel):
    username: str


class AccessToken(BaseModel):
    token: str

class ErrorMessage(BaseModel):
    message: str

class User(BaseModel):
    id: int
    firstname: str
    lastname: str
    email: str
    password: str
    username: str

class UserSignUp(BaseModel):
    username: str
    password: str
    email: str | None = None
    firstname: str | None = None
    lastname: str | None = None

class Username(BaseModel):
    usernames: list
    class Config:
        orm_mode = True

class LogInCredentials(BaseModel):
    username: str
    password: str

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def authenticate_user(repo: AccountsQueries, username: str, password: str):
    user = repo.get_user(username)
    if not user:
        return False
    if not verify_password(password, user["password"]):
        return False
    return user


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

async def get_current_active_user(
    current_user: User = Depends(get_current_user),
):
    # if current_user.disabled:
    #     raise HTTPException(status_code=400, detail="Inactive user")
    return current_user



@router.post("/api/token")
async def get_access_token(
    login_credentials: LogInCredentials,
    repo: AccountsQueries = Depends(),
):
    user = authenticate_user(repo, login_credentials.username, login_credentials.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(
        data={
            "sub": user["password"],
            "userid": user["id"],
            "username": user["username"],
            "firstname": user["firstname"],
            "lastname": user["lastname"],
        },
    )
    return {"Authorization": f"Bearer {access_token}"}

###########################################################################
#begin user functions

@router.post("/api/users")
async def signup(
    user: UserSignUp, response: Response, repo: AccountsQueries = Depends()
):
    hashed_password = pwd_context.hash(user.password)
    print(hashed_password)
    try:
        # do not touch this method ever!!!!!!!!!!!!!!!!!!!!!!!!!
        repo.create_user(
            user.username,
            hashed_password,
            user.email,
            user.firstname,
            user.lastname,
        )
        print(user)
        return user
    except DuplicateAccount:
        response.status_code = status.HTTP_409_CONFLICT
        return { "detail": "this account already exists"}

@router.get("/api/users/active",
    response_model = User,
    responses = {
        200: { "model": User },
        400: { "model": HttpError},
        401: { "model": HttpError}
    },
)

@router.post("/api/token/validate")
async def validate_token(access_token: AccessToken, response: Response):
    try:
        return jws.verify(access_token.token, SECRET_KEY, algorithms=ALGORITHM)
    except:
        response_status_code = status.HTTP_422_UNPROCESSABLE_ENTITY
        return {"detail": "token not valid"}

@router.get("/api/users",
    response_model=Username,
    responses={
        404: {"model": ErrorMessage},
    }
)
def username_list(
    query=Depends(AccountsQueries),
):
    rows = query.get_all_usernames()
    print(rows)
    usernames = {"usernames": rows}
    print(usernames)
    return usernames
