from db import UserQueries
from fastapi import APIRouter, Depends, Response
from pydantic import BaseModel

router = APIRouter()

class UserIn(BaseModel):
    first: str
    last: str
    email: str
    username: str


class UserOut(BaseModel):
    first: str
    last: str
    email: str
    username: str


class UsersOut(BaseModel):
    users: list[UserOut]


@router.get("/api/users", response_model=UsersOut)
def list_users(queries: UserQueries = Depends()):
    return {
        "users_list": queries.get_all_users()
    }
