from django.shortcuts import get_object_or_404
from ..models import Equipment
from ..serializers import EquipmentSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

class Equipments(APIView):

    def get(self, request, id=None):
        if id:
            return self.get_individual(request, id)
        return self.get_all(request)

    def get_all(self, request):
        try:
            equipment = Equipment.objects.all()
            if equipment.exists():
                data = EquipmentSerializer(equipment, many=True).data
                return Response({'message': 'Equipments retrieved successfully', 'data': data}, status=status.HTTP_200_OK)
            return Response({'message': 'No Equipments available'}, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get_individual(self, request, id):
        try:
            equipment = get_object_or_404(Equipment, id=id)
            data = EquipmentSerializer(equipment).data
            return Response({'message': 'Equipment retrieved successfully', 'data': data}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        try:
            serializer = EquipmentSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Equipment added successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, id):
        try:
            equipment = get_object_or_404(Equipment, id=id)
            equipment.delete()
            return Response({'message': 'Equipment deleted successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request, id):
        try:
            equipment = get_object_or_404(Equipment, id=id)
            serializer = EquipmentSerializer(equipment, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Equipment updated successfully', 'data': serializer.data}, status=status.HTTP_200_OK)
            return Response({'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
