from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from api.routes.equipment import Equipments
from api.routes.measurement import Measurements
from api.routes.membership import Membership
from api.routes.trainer import Trainers
from api.routes.bodyindex import Bodyindex
from api.routes.workouts import WorkoutView
from api.routes.workout_plans import WorkoutPlanView
from api.routes.dietplan import DietplanView
from api.features.payment import CreateOrderAPIView, verify_payment, payment_page
# Create your views here.
class SampleView(APIView):
    def get(self,request):
        return Response({'message':'success'},status=status.HTTP_200_OK)


equipment = Equipments()
trainer = Trainers()
membership = Membership()
measurement = Measurements()
bodyindex = Bodyindex()
create_order = CreateOrderAPIView()
verify_payment = verify_payment
payment_page = payment_page
workout = WorkoutView()
workout_plan = WorkoutPlanView()
dietplan = DietplanView()