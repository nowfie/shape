from datetime import datetime
from django.utils import timezone
from django.db import models
from django.contrib.auth.models import AbstractUser
from traitlets import default
from django.core.exceptions import ValidationError

# Create your models here.
class Equipment(models.Model):
    CHOICES_MAINTAINENCE = [
        ('functional', 'functional'),
        ('under maintenance', 'under maintenance'),
        ('out of order', 'out of order'),
        ('needs repair','needs repair')
    ]
    name = models.CharField(default=None, max_length=50)
    maintainence_status = models.CharField(max_length=50,choices=CHOICES_MAINTAINENCE,default='functional')
    last_service_date = models.DateField(default=timezone.now)
    
    def __str__(self):
        return self.name
        

class Trainer(models.Model):
    CHOICES_GENDER = [
        ('male','male'),
        ('female','female'),
        ('other','other')
    ]
    
    name = models.CharField(default=None,max_length=50)
    age = models.IntegerField(default=None)
    gender = models.CharField(max_length=50,choices=CHOICES_GENDER,default='male')
    specialization = models.JSONField(default=list)
    experience = models.PositiveIntegerField(default=0)
    contact = models.CharField(default=None,max_length=50)
    joining_date = models.DateField(default=timezone.now)
    
    def __str__(self):
        return self.name
        
class MembershipPlan(models.Model):
    CHOICES_DURATION = [
        (1, "1 Month"),
        (3, "3 Months"),
        (6, "6 Months"),
        (12, "12 Months"),
    ]
    
    plan_name = models.CharField(default=None,max_length=50)
    duration = models.IntegerField(choices=CHOICES_DURATION,default=1)
    features =  models.JSONField(default=list)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)  # Use DecimalField


    def __str__(self):
        return self.plan_name
        

class Payment(models.Model):
    CHOICES_PAYMENT = [
        ('cash', 'cash'),
        ('card', 'card'),
        ('upi', 'upi')
    ]
    
    user = models.ForeignKey("UserDetail", default=None, on_delete=models.CASCADE)
    membership = models.ForeignKey(MembershipPlan, default=None, on_delete=models.CASCADE)
    payment_method = models.CharField(default='cash',choices=CHOICES_PAYMENT,max_length=50)
    payment_date = models.DateField(default=timezone.now)
    transaction_id = models.CharField(max_length=100, blank=True, null=True)
    status = models.CharField(max_length=50, default='pending')

    def __str__(self):
        return self.user.username
        
class UserDetail(AbstractUser):
    CHOICES_GENDER = [
        ('male','male'),
        ('female','female'),
        ('other','other')
    ]

    phone = models.CharField(max_length=15, unique=True, blank=True, null=True)
    age = models.PositiveIntegerField(null=True, blank=True)
    gender = models.CharField(max_length=50,choices=CHOICES_GENDER,default='male')
    membership = models.ForeignKey(MembershipPlan,null=True,default=None, blank=True,on_delete=models.SET_NULL)
    
    def __str__(self):
        return self.username        
    
class Attendance(models.Model):
    user = models.ForeignKey(UserDetail, on_delete=models.CASCADE,default=None)
    date = models.DateField(default=timezone.now)
    check_in = models.TimeField(default=None)
    check_out = models.TimeField(default=None)
    present = models.BooleanField(default=False)
    
    class Meta:
        verbose_name = "Attendance Record"
        verbose_name_plural = "Attendance Records"
        
    def __str__(self):
        return self.user.username        
    

class Measurement(models.Model):
    CHOICE_LEVEL = [
        ('sedentary','sedentary'),
        ('light','light'),
        ('moderate','moderate'),
        ('active','active'),
        ('very active','very active')
    ]
    
    user = models.ForeignKey(UserDetail, on_delete=models.CASCADE,default=None)
    date = models.DateField(default=timezone.now)
    activity_level = models.CharField(default='moderate',choices=CHOICE_LEVEL, max_length=50)
    height = models.FloatField(default=0.0,help_text="Height in cm")
    weight = models.FloatField(default=0.0,help_text="Weight in kg")
    target_weight = models.FloatField(default=0.0, null=True, blank=True)
    chest = models.FloatField(default=0.0,help_text="Chest in cm")
    right_biceps = models.FloatField(default=0.0,help_text="Right biceps in cm")
    left_biceps = models.FloatField(default=0.0,help_text="Left biceps in cm")
    waist = models.FloatField(default=0.0,help_text="Waist in cm")
    right_thigh = models.FloatField(default=0.0,help_text="Right thigh in cm")
    left_thigh = models.FloatField(default=0.0,help_text="Left thigh in cm")
    right_calf = models.FloatField(default=0.0,help_text="Right calf in cm")
    left_calf = models.FloatField(default=0.0,help_text="Left calf in cm")
    
    def __str__(self):
        return self.user.username

class BodyIndex(models.Model):
    user = models.ForeignKey(UserDetail, on_delete=models.CASCADE,default=None)
    bmi = models.FloatField(default=0.0)
    bmr = models.FloatField(default=0.0)
    tdee = models.FloatField(default=0.0)
    target_bmi = models.FloatField(default=0.0)
    target_weight = models.FloatField(default=0.0)
    target_calorie_intake = models.FloatField(default=0.0)
    calorie_difference = models.FloatField(default=0.0)
    maximum_heart_rate = models.IntegerField(default=0)
    heart_reserve = models.IntegerField(default=0)
    heart_rate_margin = models.FloatField(default=0.0)
    intesity_percentage = models.FloatField(default=0.0)
    workout_intensity = models.CharField(max_length=50,default='moderate')
    heart_rate_avg = models.FloatField(default=0.0)
    
    def __str__(self):
        return self.user.username

class Workout(models.Model):
    name = models.CharField(max_length=30, default=None, blank=True, null=True)
    muscle = models.CharField(max_length=30, default=None, blank=True, null=True)
    potential_calorie_burn = models.FloatField(default=None, blank=True, null=True)
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE, default=None)

    def __str__(self):
        return self.name
    
class WorkoutPlan(models.Model):
    SESSION_CHOICES = [
        ('morning','morning'),
        ('evening','evening'),
        ('both','both'),
    ]
    user = models.ForeignKey(UserDetail, on_delete=models.CASCADE, default=None)
    trainer = models.ForeignKey(Trainer,on_delete=models.CASCADE,default=None, null=True)
    date = models.DateField(default=datetime.today)
    duration = models.IntegerField(default=1)
    session = models.CharField(choices=SESSION_CHOICES,default='morning',max_length=50)
    
    def __str__(self):
        return self.user.username
    
class MorningSession(models.Model):
    workout_plan = models.ForeignKey(WorkoutPlan, on_delete=models.CASCADE,default=None)
    
    def __str__(self):
        return f'{self.workout_plan.user.username} - morning session'
        

class EveningSession(models.Model):
    workout_plan = models.ForeignKey(WorkoutPlan, on_delete=models.CASCADE,default=None)
    
    def __str__(self):
        return f'{self.workout_plan.user.username} - evening session'

class AddWorkoutPlan(models.Model):
    morning_session = models.ForeignKey(MorningSession, on_delete=models.CASCADE, null=True, blank=True)
    evening_session = models.ForeignKey(EveningSession, on_delete=models.CASCADE, null=True, blank=True)
    workout = models.ForeignKey(Workout, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        if self.morning_session and self.evening_session:
            raise ValueError("Cannot assign both morning and evening sessions.")
        if not self.morning_session and not self.evening_session:
            raise ValueError("Either morning_session or evening_session must be provided.")

        if self.morning_session:
            if self.morning_session.workout_plan.session not in ['morning', 'both']:
                raise ValueError("WorkoutPlan session mismatch for morning_session")
        if self.evening_session:
            if self.evening_session.workout_plan.session not in ['evening', 'both']:
                raise ValueError("WorkoutPlan session mismatch for evening_session")

        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.workout.name} - f{self.workout.equipment}'

class AddRep(models.Model):
    add_workout = models.ForeignKey(AddWorkoutPlan, on_delete=models.CASCADE)
    count = models.IntegerField(default=10)
    weight = models.FloatField(default=5.0)
    
    def __str__(self):
        return str(self.count)
        
    
class DietPlan(models.Model):
    user = models.ForeignKey(UserDetail, on_delete=models.CASCADE, default=True)
    trainer = models.ForeignKey(Trainer,on_delete=models.CASCADE,default=None, null=True)
    chart = models.JSONField(default=list)
    duration = models.IntegerField(default=None, null=True)

    def __str__(self):
        return f"{self.user} - {self.trainer}"
    
class WorkoutSession(models.Model):
    pass

class Analytics(models.Model): #analytics values of body index and goal
    pass