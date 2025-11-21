from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from app.models.user import User
from app.core.config import MONGO_URI

async def init_db():
    # Correct way — use env string directly
    client = AsyncIOMotorClient(MONGO_URI)

    # Extract DB name from the connection string
    db_name = MONGO_URI.split("/")[-1].split("?")[0]

    db = client[db_name]

    await init_beanie(
        database=db,
        document_models=[User]
    )
