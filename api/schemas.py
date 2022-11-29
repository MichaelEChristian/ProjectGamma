from pydantic import BaseModel, Field, EmailStr

class AuthDetails(BaseModel):
    username: str
    password: str
