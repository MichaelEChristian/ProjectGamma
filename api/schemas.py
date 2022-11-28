from pydantic import BaseModel, Field, EmailStr
import datetime

class AuthDetails(BaseModel):
    email: str
    password: str
