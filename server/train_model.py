import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib
import os

# Load the dataset
# Assuming the dataset is in the same directory or provide absolute path
DATA_PATH = "Crop_recommendation.csv"
MODEL_PATH = "crop_recommendation_model.pkl"

def train_model():
    if not os.path.exists(DATA_PATH):
        print(f"Error: Dataset not found at {DATA_PATH}")
        return

    print("Loading dataset...")
    df = pd.read_csv(DATA_PATH)

    # Features and Target
    X = df[['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']]
    y = df['label']

    # Split data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Train Random Forest
    print("Training Random Forest Classifier...")
    rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
    rf_model.fit(X_train, y_train)

    # Evaluate
    y_pred = rf_model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Model Accuracy: {accuracy * 100:.2f}%")

    # Save model
    print(f"Saving model to {MODEL_PATH}...")
    joblib.dump(rf_model, MODEL_PATH)
    print("Done!")

if __name__ == "__main__":
    train_model()
