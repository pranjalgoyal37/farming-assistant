from fastapi import APIRouter, HTTPException, Query
from app.schemas.weather_schema import WeatherCurrent, WeatherForecast, ForecastDay
import httpx
import os
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()

router = APIRouter()

OPENWEATHER_API_KEY = os.getenv("OPENWEATHER_API_KEY")
BASE_URL = "https://api.openweathermap.org/data/2.5"

@router.get("/current", response_model=WeatherCurrent)
async def get_current_weather(city: str = Query("Delhi", description="City name to fetch weather for")):
    if not OPENWEATHER_API_KEY:
        raise HTTPException(status_code=500, detail="OpenWeatherMap API key not configured")
    
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(
                f"{BASE_URL}/weather",
                params={
                    "q": city,
                    "appid": OPENWEATHER_API_KEY,
                    "units": "metric"
                }
            )
            
            if response.status_code != 200:
                raise HTTPException(status_code=response.status_code, detail=response.json().get("message", "Error fetching weather"))
            
            data = response.json()
            return WeatherCurrent(
                temp=data["main"]["temp"],
                feels_like=data["main"]["feels_like"],
                humidity=data["main"]["humidity"],
                wind_speed=data["wind"]["speed"],
                description=data["weather"][0]["description"],
                icon=data["weather"][0]["icon"],
                city=data["name"]
            )
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/forecast", response_model=WeatherForecast)
async def get_weather_forecast(city: str = Query("Delhi", description="City name to fetch forecast for")):
    if not OPENWEATHER_API_KEY:
        raise HTTPException(status_code=500, detail="OpenWeatherMap API key not configured")
    
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(
                f"{BASE_URL}/forecast",
                params={
                    "q": city,
                    "appid": OPENWEATHER_API_KEY,
                    "units": "metric"
                }
            )
            
            if response.status_code != 200:
                raise HTTPException(status_code=response.status_code, detail=response.json().get("message", "Error fetching forecast"))
            
            data = response.json()
            
            # OpenWeatherMap /forecast returns 5-day / 3-hour data. 
            # We want to group it by day.
            daily_forecast = []
            seen_dates = set()
            
            for item in data["list"]:
                date_str = datetime.fromtimestamp(item["dt"]).strftime("%Y-%m-%d")
                if date_str not in seen_dates and len(daily_forecast) < 7:
                    seen_dates.add(date_str)
                    daily_forecast.append(ForecastDay(
                        date=date_str,
                        temp_min=item["main"]["temp_min"],
                        temp_max=item["main"]["temp_max"],
                        humidity=item["main"]["humidity"],
                        description=item["weather"][0]["description"],
                        icon=item["weather"][0]["icon"]
                    ))
            
            return WeatherForecast(
                city=data["city"]["name"],
                forecast=daily_forecast
            )
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
