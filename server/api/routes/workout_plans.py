from django.shortcuts import get_object_or_404
from ..models import WorkoutPlan
from ..serializers import WorkoutPlanSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

class WorkoutPlanView(APIView):

    def get(self, request, id=None):
        if id:
            return self.get_individual(request, id)
        return self.get_all(request)

    def get_all(self, request):
        try:
            workoutplan = WorkoutPlan.objects.all()
            if workoutplan.exists():
                data = WorkoutPlanSerializer(workoutplan, many=True).data
                return Response({'message': 'WorkoutPlans retrieved successfully', 'data': data}, status=status.HTTP_200_OK)
            return Response({'message': 'No WorkoutPlans available'}, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get_individual(self, request, id):
        try:
            workoutplan = get_object_or_404(WorkoutPlan, id=id)
            data = WorkoutPlanSerializer(workoutplan).data
            return Response({'message': 'WorkoutPlan retrieved successfully', 'data': data}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        try:
            serializer = WorkoutPlanSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'WorkoutPlan added successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, id):
        try:
            workoutplan = get_object_or_404(WorkoutPlan, id=id)
            workoutplan.delete()
            return Response({'message': 'WorkoutPlan deleted successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request, id):
        try:
            workoutplan = get_object_or_404(WorkoutPlan, id=id)
            serializer = WorkoutPlanSerializer(workoutplan, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'WorkoutPlan updated successfully', 'data': serializer.data}, status=status.HTTP_200_OK)
            return Response({'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
