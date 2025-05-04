from rest_framework import serializers
from . import models

class TrainerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Trainer
        fields = '__all__'

class MembershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.MembershipPlan
        fields = '__all__'
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserDetail
        fields = '__all__'
        
class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Equipment
        fields = '__all__'

class MeasurementSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(
        slug_field='username',
        queryset=models.UserDetail.objects.all()
    )
    class Meta:
        model = models.Measurement
        fields = '__all__'

class BodyIndexSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.BodyIndex
        fields = '__all__'
    
class WorkoutSerializer(serializers.ModelSerializer):
    equipment = serializers.SlugRelatedField(
        slug_field ='name',
        queryset=models.Equipment.objects.all()
    )
    class Meta:
        model = models.Workout
        fields = '__all__'
        
class AddRepSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AddRep
        fields = ['id', 'count', 'weight']

        
class AddWorkoutPlanSerializer(serializers.ModelSerializer):
    workout = WorkoutSerializer()
    reps = serializers.SerializerMethodField()

    class Meta:
        model = models.AddWorkoutPlan
        fields = ['id', 'workout', 'reps']

    def get_reps(self, obj):
        reps = models.AddRep.objects.filter(add_workout=obj)
        return AddRepSerializer(reps, many=True).data

        
        
class MorningSessionSerializer(serializers.ModelSerializer):
    workouts = serializers.SerializerMethodField()

    class Meta:
        model = models.MorningSession
        fields = ['id', 'workouts']

    def get_workouts(self, obj):
        workouts = models.AddWorkoutPlan.objects.filter(morning_session=obj)
        return AddWorkoutPlanSerializer(workouts, many=True).data

class EveningSessionSerializer(serializers.ModelSerializer):
    workouts = serializers.SerializerMethodField()

    class Meta:
        model = models.EveningSession
        fields = ['id', 'workouts']

    def get_workouts(self, obj):
        workouts = models.AddWorkoutPlan.objects.filter(evening_session=obj)
        return AddWorkoutPlanSerializer(workouts, many=True).data
    

class WorkoutPlanSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(
        slug_field='username',
        queryset=models.UserDetail.objects.all()
    )
    trainer = serializers.SlugRelatedField(
        slug_field='name',
        queryset=models.Trainer.objects.all(),
        required=False,
        allow_null=True
    )
    morning_session = serializers.SerializerMethodField()
    evening_session = serializers.SerializerMethodField()
    
    class Meta:
        model = models.WorkoutPlan
        fields = '__all__'
        
    def get_morning_session(self, obj):
        try:
            morning = models.MorningSession.objects.get(workout_plan=obj)
            return MorningSessionSerializer(morning).data
        except models.MorningSession.DoesNotExist:
            return None

    def get_evening_session(self, obj):
        try:
            evening = models.EveningSession.objects.get(workout_plan=obj)
            return EveningSessionSerializer(evening).data
        except models.EveningSession.DoesNotExist:
            return None


class DietPlanSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(
        slug_field='username',
        queryset=models.UserDetail.objects.all()
    )
    trainer = serializers.SlugRelatedField(
        slug_field='name',
        queryset=models.Trainer.objects.all(),
        required=False,
        allow_null=True
    )
    class Meta:
        model = models.DietPlan
        fields = '__all__'