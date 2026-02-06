from beanie import Document
from pydantic import EmailStr
from typing import Literal

class User(Document):
    fullName: str | None = None
    email: EmailStr
    password: str
    role: Literal["farmer", "admin", "user"] = "farmer"

    class Settings:
        name = "users"     # MongoDB collection name
