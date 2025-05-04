from django.shortcuts import get_object_or_404
from ..models import DietPlan
from ..serializers import DietPlanSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

class DietplanView(APIView):

    def get(self, request, id=None):
        if id:
            return self.get_individual(request, id)
        return self.get_all(request)

    def get_all(self, request):
        try:
            dietplan = DietPlan.objects.all()
            if dietplan.exists():
                data = DietPlanSerializer(dietplan, many=True).data
                return Response({'message': 'dietplans retrieved successfully', 'data': data}, status=status.HTTP_200_OK)
            return Response({'message': 'No dietplans available'}, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get_individual(self, request, id):
        try:
            dietplan = get_object_or_404(DietPlan, id=id)
            data = DietPlanSerializer(dietplan).data
            return Response({'message': 'dietplan retrieved successfully', 'data': data}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        try:
            serializer = DietPlanSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'dietplan added successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, id):
        try:
            dietplan = get_object_or_404(DietPlan, id=id)
            dietplan.delete()
            return Response({'message': 'dietplan deleted successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request, id):
        try:
            dietplan = get_object_or_404(DietPlan, id=id)
            serializer = DietPlanSerializer(dietplan, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'dietplan updated successfully', 'data': serializer.data}, status=status.HTTP_200_OK)
            return Response({'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
