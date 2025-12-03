from pydantic import BaseModel, EmailStr
from typing import Literal


class UserRegister(BaseModel):
    fullName: str
    email: EmailStr
    password: str
    role: Literal["farmer", "admin"] ="farmer"
    # print(fullName,email,password,role)

class UserLogin(BaseModel):
    email: EmailStr
    password: str
