import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import os

class TargetBmiPrediction:
    FILE_PATH = r"D:\UNITYR\Products\AGMS\application\version 0\AGMS_server\api\features\machine_learning\dataset\bmi_dataset.csv"
    
    def __init__(self):
        self.check_and_create_csv()
        self.BMI_DATA = pd.read_csv(self.FILE_PATH)
        self.encoders = {col: LabelEncoder() for col in ["activity_level", "fitness_goal", "gender"]}
        self.scaler = StandardScaler()
        self.model = self.tune_model()
        
    def check_and_create_csv(self):
        if not os.path.exists(self.FILE_PATH):
            columns = ["current_bmi", "activity_level", "fitness_goal", "age", "gender", "target_bmi"]
            pd.DataFrame(columns=columns).to_csv(self.FILE_PATH, index=False)

    def preprocess(self, pre_input=None):
        data = pd.read_csv(self.FILE_PATH)

        if data.isnull().sum().sum() > 0:
            print("Warning: Missing values detected. Consider handling them.")

        for col in self.encoders:
            data[col] = self.encoders[col].fit_transform(data[col])

        if pre_input is not None:
            pre_input_df = pd.DataFrame([pre_input], columns=["current_bmi", "activity_level", "fitness_goal", "age", "gender"])
            for col in self.encoders:
                pre_input_df[col] = self.encoders[col].transform([pre_input_df[col][0]])
            pre_input_df = self.scaler.transform(pre_input_df)
            return pre_input_df

        X = data.drop(columns=["target_bmi"])
        y = data["target_bmi"]

        X_scaled = self.scaler.fit_transform(X)
        return train_test_split(X_scaled, y, train_size=0.7, random_state=42)

    def tune_model(self):
        param_grid = {
            "n_estimators": [50, 100, 200],
            "max_depth": [None, 10, 20, 30],
            "min_samples_split": [2, 5, 10],
        }
        model = GridSearchCV(RandomForestRegressor(random_state=42), param_grid, cv=3, scoring="r2")
        X_train, X_test, y_train, y_test = self.preprocess()
        model.fit(X_train, y_train)
        return model.best_estimator_

    def train_model(self):
        X_train, X_test, y_train, y_test = self.preprocess()
        self.model.fit(X_train, y_train)
        return self.evaluation(X_test, y_test)

    def evaluation(self, X_test, y_test):
        pred = self.model.predict(X_test)
        metrics = {
            "MAE": mean_absolute_error(y_test, pred),
            "MSE": mean_squared_error(y_test, pred),
            "R2 Score": r2_score(y_test, pred),
            "Prediction": pred.tolist()
        }
        return metrics

    def actual_prediction(self,input_data):
        self.train_model()
        input_df = self.preprocess(input_data)
        prediction = self.model.predict(input_df)[0]
        self.append_to_csv(input_data, round(prediction, 2))
        return round(prediction, 2)

    def append_to_csv(self, input_data, prediction):
        new_data = pd.DataFrame([{
            "current_bmi": input_data[0], 
            "activity_level": input_data[1], 
            "fitness_goal": input_data[2], 
            "age": input_data[3], 
            "gender": input_data[4], 
            "target_bmi": prediction
        }])
        
        new_data.to_csv(self.FILE_PATH, mode='a', header=False, index=False)
        
