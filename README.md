# Farming Assistant

A comprehensive web application designed to assist farmers with crop recommendations, weather updates, and more. Built with a modern tech stack ensuring performance and scalability.

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Vite
- **Backend**: Python, FastAPI
- **Database**: MongoDB
- **Machine Learning**: Scikit-learn, Pandas (Random Forest Classifier)

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- Python 3.8+
- MongoDB (Local or Atlas)

### 1. Backend Setup (`server`)

Navigate to the server directory:
```bash
cd server
```

Create and activate a virtual environment (optional but recommended):
```bash
python -m venv venv
# Windows
.\venv\Scripts\activate
# Mac/Linux
source venv/bin/activate
```

Install dependencies:
```bash
pip install -r requirements.txt
```

Set up Environment Variables:
Create a `.env` file in `server/app/.env` (or check `config.py` for required vars) with:
```env
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key
```

Run the server:
```bash
python -m uvicorn main:app --reload
```
The API will be available at `http://localhost:8000`.

### 2. Frontend Setup (`client`)

Navigate to the client directory:
```bash
cd client
```

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## 🌾 Features

### Crop Recommendation
Uses a Machine Learning model to recommend the best crop based on soil and weather conditions.

- **Input**: Nitrogen (N), Phosphorus (P), Potassium (K), Temperature, Humidity, pH, Rainfall.
- **Output**: Recommended Crop (e.g., Rice, Wheat, Maize).
- **Model**: Random Forest Classifier (~99% Accuracy).

#### How to Retrain the Model
If you have new data or want to verify accuracy, you can retrain the model.

1. Ensure `Crop_recommendation.csv` is present in the `server/` directory.
2. Run the training script:
   ```bash
   cd server
   python train_model.py
   ```
3. This will:
   - Load the dataset.
   - Train a new Random Forest model.
   - Print the **Accuracy Score**.
   - Save the model to `crop_recommendation_model.pkl`.
4. The backend automatically loads the new model upon restart.

### Dashboard
Provides a quick overview of farm stats, weather, and quick links to tools.

## 📂 Project Structure

```
farming-assistant/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components (Dashboard, CropRecommendation, etc.)
│   │   └── ...
├── server/                 # FastAPI Backend
│   ├── app/
│   │   ├── routes/         # API Routes (auth, crop, etc.)
│   │   ├── models/         # Database models
│   │   ├── schemas/        # Pydantic schemas
│   │   └── ...
│   ├── train_model.py      # ML Training Script
│   ├── Crop_recommendation.csv # Dataset
│   └── main.py             # App Entry Point
└── README.md               # Project Documentation
```

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.
