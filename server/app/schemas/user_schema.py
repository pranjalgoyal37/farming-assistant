from pydantic import BaseModel, EmailStr
from typing import Literal

class UserRegister(BaseModel):
    fullName: str
    email: EmailStr
    password: str
    role: Literal["farmer", "admin", "user"] = "farmer"

class UserLogin(BaseModel):
    email: EmailStr
    password: str
