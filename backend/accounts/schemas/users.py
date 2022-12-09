from fastapi import APIRouter, Response, status, Depends, HTTPException
from psycopg.errors import UniqueViolation
from pydantic import BaseModel
import os
from fastapi.security import OAuth2PasswordBearer
from jose import jwt

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token", auto_error=False)
# look this up later

router = APIRouter()


class User(BaseModel):
    id: int
    firstname: str
    lastname: str
    email: str
    password: str
    username: str

class Usernames(BaseModel):
    usernames: list
    class Config:
        orm_mode = True
