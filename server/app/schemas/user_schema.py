from pydantic import BaseModel, EmailStr

class UserRegister(BaseModel):
    fullName: str
    email: EmailStr
    password: str
    profile_url: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str
