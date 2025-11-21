from dotenv import load_dotenv
import os

load_dotenv()  # load .env file

CLOUD_NAME = os.getenv("CLOUDINARY_CLOUD_NAME")
CLOUD_API_KEY = os.getenv("CLOUDINARY_API_KEY")
CLOUD_API_SECRET = os.getenv("CLOUDINARY_API_SECRET")
MONGO_URI=os.getenv("MONGO_URI")