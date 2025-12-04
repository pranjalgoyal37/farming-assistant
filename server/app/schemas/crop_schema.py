from pydantic import BaseModel

class CropInput(BaseModel):
    N: float
    P: float
    K: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float

class CropOutput(BaseModel):
    recommended_crop: str
