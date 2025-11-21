from beanie import Document
from pydantic import EmailStr

class User(Document):
    fullName: str
    email: EmailStr
    password: str
    profile_url : str
    role: str = "user"     # default role

    class Settings:
        name = "users"     # MongoDB collection name
