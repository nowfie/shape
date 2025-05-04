from .machine_learning.target_bmi_prediction import TargetBmiPrediction

class BodyMetricsCalculator:
    """ bmi, target weight, bmr, tdee, fitness goal,  calorie deficiency, 
    daily changes, maximum heart rate, reserve heart rate, heart rate range, 
    target heart rate, target point, intensity"""
    
    HEART_RATE_ZONES = {
        "warm up": (0.5, 0.6),
        "fat burn": (0.6, 0.7),
        "aerobic": (0.7, 0.8),
        "anaerobic": (0.8, 0.9),
        "red zone": (0.9, 1.0),
    }

    ACTIVITY_MULTIPLIERS = {
        "sedentary": 1.2,
        "light": 1.375,
        "moderate": 1.55,
        "active": 1.725,
        "very active": 1.9
    }

    WORKOUT_INTENSITY = {
        "low intensity": (0.5, 0.6),
        "moderate intensity": (0.6, 0.75),
        "high intensity": (0.75, 0.9)
    }

    def bmi_function(self, weight, height):
        bmi = round(weight / (height / 100) ** 2, 2)
        if bmi < 18.5:
            bmi_range = 'under weight'
        elif 18.5 <= bmi < 24.9:
            bmi_range = 'normal weight'
        elif 24.9 <= bmi < 29.9:
            bmi_range = 'over weight'
        else:
            bmi_range = 'obesity'
        return bmi, bmi_range

    
    def target_bmi_function(self, bmi_value,activity_level, fitness_goal, age, gender, height):
        input_data = [bmi_value,activity_level, fitness_goal, age,gender]
        input_data[2] = input_data[2].replace("_", " ")
        model = TargetBmiPrediction()
        target_bmi = model.actual_prediction(input_data)
        return target_bmi
    
    def target_weight_function(self, target_bmi, height):
        return round(target_bmi * (height / 100) ** 2, 2)
    
    def bmr_calculation_function(self, gender, weight, height, age):
        if gender.lower() == 'male':
            return round((10 * weight) + (6.25 * height) - (5 * age) + 5, 2)
        elif gender.lower() == 'female':
            return round((10 * weight) + (6.25 * height) - (5 * age) - 161, 2)
        else:
            return round((10 * weight) + (6.25 * height) - (5 * age) - 161, 2)

    def tdee_calculation_function(self, activity_level, bmr_value):
        multiplier = self.ACTIVITY_MULTIPLIERS.get(activity_level.lower(), 1.2)
        return round(bmr_value * multiplier, 2)

    def fitness_goal_recomendation(self, bmi_range, activity_level):
        weight_loss_goals = ['mild weight loss', 'moderate weight loss', 'aggressive weight loss', 'extreme weight loss']
        weight_gain_goals = ['mild weight gain', 'moderate weight gain', 'aggressive weight gain', 'extreme weight gain']
        muscle_goals = ['lean muscle gain', 'muscle bulking', 'muscle cutting']
        maintenance_goals = ['weight maintenance', 'fitness', 'healthy lifestyle']
        bodybuilding_goals = ['beginner bodybuilding', 'intermediate bodybuilding', 'advanced bodybuilding']
        
        goal_map = {
            'under weight':[weight_gain_goals,muscle_goals[:1]],
            'normal weight': [maintenance_goals, muscle_goals[:1]],
            'over weight': [weight_loss_goals[1:], muscle_goals[2:]],
            'obesity': [weight_loss_goals[2:], ['high-intensity cardio']],
        }
        activity_boost = {
            'sedentary': 0,
            'light': 0,
            'moderate': 1,
            'active': 1,
            'very active': 2,
        }
        
        base_goals = goal_map.get(bmi_range,maintenance_goals)
        intensity = activity_boost.get(activity_level,0)
        selected_goals = base_goals[0][: 2 + intensity] + base_goals[1][: intensity]  # type: ignore

        if activity_level == 'very active' and bmi_range in ['normal weight', 'over weight']:
            selected_goals.append(bodybuilding_goals[0]) # type: ignore

        return selected_goals

    #machine learning approach 
    def fitness_goal(self,goal):
        return goal
        
    def calorie_deficit_calculation(self, calories_for_maintaining, calories_for_target):
        return abs(calories_for_maintaining - calories_for_target)

    def daily_changes(self, calorie_deficit):
        return calorie_deficit / 7700

    def maximum_heart_rate_function(self, age):
        return 220 - age

    def heart_reserve_rate_function(self, max_hr, resting_hr):
        return max_hr - resting_hr

    def heart_rate_range_function(self, resting_hr, max_hr):
        return {
            zone: (resting_hr + ((max_hr - resting_hr) * range_[0]),
                   resting_hr + ((max_hr - resting_hr) * range_[1]))
            for zone, range_ in self.HEART_RATE_ZONES.items()
        }

    def target_heart_rate_function(self, medical_condition, max_hr, resting_hr):
        selected_intensity = [self.WORKOUT_INTENSITY['low intensity']] if medical_condition != 'healthy' else [
            self.WORKOUT_INTENSITY['moderate intensity'], self.WORKOUT_INTENSITY['high intensity']
        ]
        
        intensity_range = [
            resting_hr + ((max_hr - resting_hr) * level) 
            for intensity in selected_intensity 
            for level in intensity
        ]

        return intensity_range[0], intensity_range[-1]

    def target_point_function(self, target_range_1, target_range_2):
        return target_range_2 + ((target_range_1 - target_range_2) / 2)

    def intensity_percentage(self,target_heart_point,reseting_heart_rate,heart_reserve_rate):
        return round((target_heart_point - reseting_heart_rate)/heart_reserve_rate,2)
        
    #use machine learning algorithm to calculate intensity level
    def intensity_level_function(self, fitness_goal, medical_condition): 
        if "body building" in fitness_goal:
            return "high"
        elif "weight loss" in fitness_goal or medical_condition != "healthy":
            return "low"
        return "moderate"
