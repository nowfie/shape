from django.shortcuts import get_object_or_404
from ..models import Workout
from ..serializers import WorkoutSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

class WorkoutView(APIView):

    def get(self, request, id=None):
        if id:
            return self.get_individual(request, id)
        return self.get_all(request)

    def get_all(self, request):
        try:
            workout = Workout.objects.all()
            if workout.exists():
                data = WorkoutSerializer(workout, many=True).data
                return Response({'message': 'Workouts retrieved successfully', 'data': data}, status=status.HTTP_200_OK)
            return Response({'message': 'No Workouts available'}, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get_individual(self, request, id):
        try:
            equipment = get_object_or_404(Workout, id=id)
            data = WorkoutSerializer(equipment).data
            return Response({'message': 'Workout retrieved successfully', 'data': data}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        try:
            serializer = WorkoutSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Workout added successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, id):
        try:
            equipment = get_object_or_404(Workout, id=id)
            equipment.delete()
            return Response({'message': 'Workout deleted successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request, id):
        try:
            workout = get_object_or_404(Workout, id=id)
            serializer = WorkoutSerializer(workout, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Workout updated successfully', 'data': serializer.data}, status=status.HTTP_200_OK)
            return Response({'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
