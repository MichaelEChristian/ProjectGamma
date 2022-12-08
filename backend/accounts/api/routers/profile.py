from fastapi import APIRouter, Response, status, Depends, HTTPException
from psycopg.errors import UniqueViolation
from pydantic import BaseModel
from jose import jwt
import os
from fastapi.security import OAuth2PasswordBearer
from db.user_db import pool, AccountsQueries
from db.profile_db import ProfileQueries
from library import auth

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token", auto_error=False)

router = APIRouter()
SECRET_KEY = os.environ["SECRET_KEY"]
ALGORITHM = "HS256"

credentials_exception = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid authentication credentials",
    headers={"WWW-Authenticate": "Bearer"},
)

class HttpError(BaseModel):
    detail: str

class User(BaseModel):
    id: int
    firstname: str
    lastname: str
    email: str
    password: str
    username: str


class ProfileIn(BaseModel):
    userid: int
    firstname: str
    lastname: str
    username: str

class ProfileOut(BaseModel):
    id: int
    height: int
    userid: int
    firstname: str
    lastname: str
    username: str

class Username(BaseModel):
    usernames: list
    class Config:
        orm_mode = True

class ErrorMessage(BaseModel):
    message: str

@router.post("/api/profile/new", response_model = ProfileOut, responses={500: {"model": ErrorMessage},},)

def profile_post(
    profile: ProfileIn,
    response: Response,
    bearer_token: str = Depends(oauth2_scheme),
):
    print("bearer token:", bearer_token)
    if bearer_token is None:
        raise credentials_exception
    print("bearer token:", bearer_token)


    ## decode returns a dictionary (ie. payload is a dictionary dictionary)

    payload = auth.decode_token(bearer_token)
    print(payload)
    password = payload.get("sub"),
    print(password)
    userid = payload.get("userid")
    print(userid)
    username= payload.get("username")
    print(username)
    firstname =payload.get("firstname")
    print(firstname)
    lastname= payload.get("lastname")
    print(lastname)
    with pool.connection() as conn:
        with conn.cursor() as cur:
            try:
                cur.execute(
                    """
                    INSERT INTO user_profile (firstname, lastname, username, userid)
                    VALUES (%s, %s, %s, %s)
                    RETURNING id, firstname, lastname, username, userid
                    """,
                    [profile.firstname, profile.lastname, profile.username, userid],
                )

            except UniqueViolation:
                response.status_code = status.HTTP_409_CONFLICT
                return {
                    "message": "duplicate profile",
                }
            row = cur.fetchone()
            record = {
                "firstname": firstname,
                "lastname": lastname,
                "username": username,
                "userid": userid,
            }

            for i, column in enumerate(cur.description):
                record[column.name] = row[i]
            return record

@router.get(
    "/api/profile/",
    response_model = ProfileOut,
    responses = {
        200: {"model": ProfileOut},
        400: {"model": ErrorMessage},
    },
)
def profile_list(
    response: Response,
    query=Depends(ProfileQueries),
    bearer_token: str = Depends(oauth2_scheme),
):
    if bearer_token is None:
        raise credentials_exception
    payload = jwt.decode(bearer_token, SECRET_KEY, algorithms=[ALGORITHM])
    user = payload.get("username")
    id = payload.get("userid")
    row = query.get_profile(id)
    if row is None:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "profile not found"}
    return row

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

@router.get("/api/users/active",
    response_model = User,
    responses = {
        200: { "model": User },
        400: { "model": HttpError},
        401: { "model": HttpError}
    },
)

# def profile_list(
#     response: Response,
#     current_user = Depends(auth.get_current_user),
# ):

    # if bearer_token is None:
    #     raise auth.credentials_exception
    # payload = auth.decode_token(bearer_token)
    # user = payload.get("username")
    # id = payload.get("userid")
    # row = query.get_profile(id)
    # if row is None:
    #     response.status_code = status.HTTP_404_NOT_FOUND
    #     return {"message": "profile not found"}
    # return row
    # print(current_user)
    # return {"a": "a"}

# TODO: REMOVE THIS BEFORE DEPLOYMENT
@router.get("/api/profile/test-auth")
def test_auth(current_user = Depends(auth.get_current_user)):
    return current_user
