import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import joblib
import os

DATA_PATH = "Fertilizer_Prediction.csv"
MODEL_PATH = "fertilizer_model.pkl"
ENCODERS_PATH = "fertilizer_encoders.pkl"

def train_fertilizer_model():
    if not os.path.exists(DATA_PATH):
        print(f"Error: Dataset not found at {DATA_PATH}")
        return

    print("Loading dataset...")
    df = pd.read_csv(DATA_PATH)
    
    # Strip whitespace from column names
    df.columns = df.columns.str.strip()

    # Features and Target
    X = df[['Temparature', 'Humidity', 'Moisture', 'Soil Type', 'Crop Type', 'Nitrogen', 'Potassium', 'Phosphorous']]
    y = df['Fertilizer Name']

    # Encoding categorical features
    encoders = {}
    for col in ['Soil Type', 'Crop Type']:
        le = LabelEncoder()
        X[col] = le.fit_transform(X[col])
        encoders[col] = le
    
    # Encode target
    le_y = LabelEncoder()
    y = le_y.fit_transform(y)
    encoders['target'] = le_y

    # Split data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Train Random Forest
    print("Training Random Forest Classifier...")
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    # Evaluate
    accuracy = model.score(X_test, y_test)
    print(f"Model Accuracy: {accuracy * 100:.2f}%")

    # Save model and encoders
    print(f"Saving model and encoders...")
    joblib.dump(model, MODEL_PATH)
    joblib.dump(encoders, ENCODERS_PATH)
    print("Done!")

if __name__ == "__main__":
    train_fertilizer_model()
