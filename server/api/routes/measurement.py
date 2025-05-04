from django.shortcuts import get_object_or_404
from ..models import Measurement
from ..serializers import MeasurementSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

class Measurements(APIView):

    def get(self, request, id=None):
        if id:
            return self.get_individual(request, id)
        return self.get_all(request)

    def get_all(self, request):
        try:
            measurement = Measurement.objects.all()
            if measurement.exists():
                data = MeasurementSerializer(measurement, many=True).data
                return Response({'message': 'measurements retrieved successfully', 'data': data}, status=status.HTTP_200_OK)
            return Response({'message': 'No measurements available'}, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get_individual(self, request, id):
        try:
            measurement = get_object_or_404(Measurement, user_id=id)
            data = MeasurementSerializer(measurement).data
            return Response({'message': 'Measurement retrieved successfully', 'data': data}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        try:
            serializer = MeasurementSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Measurement added successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, id):
        try:
            measurement = get_object_or_404(Measurement, id=id)
            measurement.delete()
            return Response({'message': 'Measurement deleted successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request, id):
        try:
            measurement = get_object_or_404(Measurement, id=id)
            serializer = MeasurementSerializer(measurement, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Measurement updated successfully', 'data': serializer.data}, status=status.HTTP_200_OK)
            return Response({'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
