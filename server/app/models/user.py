from beanie import Document
from pydantic import EmailStr
from typing import Literal

class User(Document):
    fullName: str
    email: EmailStr
    password: str
    # profile_url: str | None = None
    role: Literal["farmer", "admin"] = "farmer"  # default value

    class Settings:
        name = "users"     # MongoDB collection name
