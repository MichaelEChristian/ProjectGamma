from fastapi import APIRouter, Response, status, Depends
from psycopg.errors import UniqueViolation
from pydantic import BaseModel
from jose import jwt
from db.user_db import pool
from db.profile_db import ProfileQueries
from library import auth

router = APIRouter()

class ProfileIn(BaseModel):
    budget: int

class ProfileOut(BaseModel):
    id: int
    budget: int
    userid: int
    firstname: str
    lastname: str
    username: str

class ErrorMessage(BaseModel):
    message: str

@router.post("/api/profile", response_model = ProfileOut, responses={500: {"model": ErrorMessage},},)
def profile_post(
    profile: ProfileIn,
    response: Response,
    bearer_token: str = Depends(auth.oauth2_scheme),
):
    if bearer_token is None:
        raise auth.credentials_exception
    print(bearer_token)


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
                    INSERT INTO user_profile (budget, userid)
                    VALUES (%s, %s)
                    RETURNING id, budget, userid
                    """,
                    [profile.budget, userid],
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
                "budget": profile.budget,
                "userid": userid,
            }

            for i, column in enumerate(cur.description):
                record[column.name] = row[i]
            return record

@router.get(
    "/api/profile",
    response_model = ProfileOut,
    responses = {
        200: {"model": ProfileOut},
        400: {"model": ErrorMessage},
    },
)
def profile_list(
    response: Response,
    current_user = Depends(auth.get_current_user),
):
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
    print(current_user)
    return {"a": "a"}
