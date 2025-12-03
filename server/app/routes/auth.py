from fastapi import APIRouter, HTTPException,UploadFile, File, Form
from app.schemas.user_schema import UserRegister, UserLogin
from app.models.user import User
from app.core.security import hash_pass, verify_pass, create_access_token
import cloudinary.uploader
from app.core.cloudinary_config import *

router = APIRouter(prefix="/api/auth")

# -------------------
# SIGN UP
# -------------------
@router.post("/register")
async def register(data: UserRegister):
    print(data)
    userExist = await User.find_one(User.email == data.email)
    if userExist:
        raise HTTPException(
            status_code=409, 
            detail={
                "success": False,
                "message": "Email already exists",
                "errorCode": "EMAIL_EXISTS"
            })
    user = User(
        fullName=data.fullName,
        email=data.email,
        password=hash_pass(data.password),
        role=data.role,

    )
    await user.insert()

    return {
    "success": True,
    "message": "User registered successfully",
    "data": {
        "id": str(user.id),
        "fullName": user.fullName,
        "email": user.email,
    
        "role" : user.role
    }
}

# -------------------
# LOGIN
# -------------------
@router.post("/login")
async def login(data: UserLogin):
    print("Received body:", data)

    user = await User.find_one(User.email == data.email)
    if not user:
        raise HTTPException(400, "Invalid Credentials")

    if not verify_pass(data.password, user.password):
        raise HTTPException(400, "Invalid Password")

    token = create_access_token({"email": user.email, "role": user.role})

    return {
        "message": "Login success",
        "token": token,
        "role": user.role,
        "user": {
            "fullName": user.fullName,
            "email": user.email,
            "role": user.role
        }
    }

@router.post("/upload-image")
async def upload_image(file: UploadFile = File(...)):
    upload_result = cloudinary.uploader.upload(
        file.file,
        folder="task-manager"
    )

    return {
        "message": "Uploaded Successfully",
        "url": upload_result["secure_url"]
    }
