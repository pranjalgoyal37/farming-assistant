from pydantic import BaseModel
from typing import Optional

class FertilizerInput(BaseModel):
    temperature: float
    humidity: float
    moisture: float
    soilType: str
    cropType: str
    N: float
    K: float
    P: float

class FertilizerOutput(BaseModel):
    recommendation: str
    description: Optional[str] = None

FERTILIZER_DESCRIPTIONS = {
    "Urea": "A high-nitrogen fertilizer (46-0-0) that promotes green leafy growth and is essential for most cereal crops.",
    "DAP": "Diammonium Phosphate (18-46-0). A preferred source of Phosphorus and Nitrogen, crucial for root development and early plant growth.",
    "14-35-14": "A balanced complex fertilizer containing Nitrogen, Phosphorus, and Potassium. Excellent for basal application.",
    "28-28": "High Nitrogen and Phosphorus fertilizer (28-28-0), ideal for crops requiring strong early-stage growth and healthy foliage.",
    "17-17-17": "A balanced NPK fertilizer suitable for a wide range of crops throughout their growth cycle.",
    "20-20": "Ammonium Phosphate Sulphate (20-20-0-13), providing Nitrogen, Phosphorus, and essential Sulphur for oilseeds and pulses.",
    "10-26-26": "High Phosphorus and Potassium content, perfect for flowering and fruiting stages to improve yield quality."
}
