from fastapi import APIRouter, Depends
from pydantic import BaseModel
from db import UserQueries

router = APIRouter()

class UserOut(BaseModel):
    id: int
    first: str
    last: str
    avatar: str
    email: str
    username: str


class UsersOut(BaseModel):
    users: list[UserOut]


@router.get("/api/users/", response_model = UsersOut)
def users_list():
    return {
        "users": [],
    }
