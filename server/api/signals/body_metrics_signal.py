from django.db.models.signals import post_save
from django.dispatch import receiver
from ..models import BodyIndex, Measurement
from ..features.body_metrics import BodyMetricsCalculator
from django.db import transaction

@receiver(post_save, sender=Measurement)
def body_metrics_signal(sender, instance, created, **kwargs):
    print(instance)
    if created:
        user = instance.user 
        calculator = BodyMetricsCalculator()

        bmi = calculator.bmi_function(instance.weight, instance.height)
        bmr = calculator.bmr_calculation_function(user.gender, instance.weight, instance.height, user.age)
        tdee = calculator.tdee_calculation_function(instance.activity_level, bmr)
        
        # fitness_goal_recomendation = calculator.fitness_goal_recomendation(bmi[1],instance.activity_level)
        # print(fitness_goal_recomendation)
        # fitness_goal = calculator.fitness_goal('lean muscle gain') #use machine learing model to predict fitness
        fitness_goal = 'lean muscle gain'
        target_bmi= calculator.target_bmi_function( bmi[0],instance.activity_level, fitness_goal, user.age, user.gender, instance.height)
        target_weight = calculator.target_weight_function( target_bmi, instance.height)
        target_bmr = calculator.bmr_calculation_function(user.gender, target_weight, instance.height, user.age)
        target_tdee = calculator.tdee_calculation_function(instance.activity_level, target_bmr)
        calorie_difference = calculator.calorie_deficit_calculation(tdee, target_tdee)
        maximum_heart_rate = calculator.maximum_heart_rate_function(user.age)
        heart_reserve = calculator.heart_reserve_rate_function(maximum_heart_rate, 72)
        heart_rate_ranges = calculator.heart_rate_range_function(72, maximum_heart_rate)
        target_heart_rate = calculator.target_heart_rate_function('healthy', maximum_heart_rate, 72)
        heart_rate_margin = calculator.target_point_function(target_heart_rate[0], target_heart_rate[1])
        intensity_percentage = calculator.intensity_percentage(heart_rate_margin,72,heart_reserve)
        workout_intensity = calculator.intensity_level_function(fitness_goal, 'healthy')
        
        with transaction.atomic():
            instance.target_weight = target_weight
            instance.save(update_fields=['target_weight'])

        body_index, created = BodyIndex.objects.update_or_create(
            user=user,
            defaults={
                'bmi': bmi[0],
                'bmr': bmr,
                'tdee': tdee,
                'target_bmi': target_bmi,
                'target_weight': target_weight,
                'target_calorie_intake': target_tdee,
                'calorie_difference': calorie_difference,
                'maximum_heart_rate': maximum_heart_rate,
                'heart_reserve': heart_reserve,
                'heart_rate_margin': heart_rate_margin,
                'intesity_percentage': intensity_percentage,
                'workout_intensity': workout_intensity,
                'heart_rate_avg': sum(target_heart_rate) / len(target_heart_rate),
            }
        )
        print("BMI:", bmi)
        print("BMR:", bmr)
        print("TDEE:", tdee)
        print("Fitness Goal:", fitness_goal)
        print("Current Weight:", instance.weight)
        print("Target Weight:", target_weight)
        print("Target Calorie Intake:", target_tdee)
        print("Calorie Deficit:", calorie_difference)
        print("Max Heart Rate:", maximum_heart_rate)
        print("Heart Reserve:", heart_reserve)
        print("Heart Rate Range:", heart_rate_ranges)
        print("Target Heart Rate:", target_heart_rate)
        print("Heart Rate Margin:", heart_rate_margin)
        print("Intensity Percentage:", intensity_percentage)
        print("Workout Intensity:", workout_intensity)
