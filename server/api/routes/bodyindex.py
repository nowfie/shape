from django.shortcuts import get_object_or_404
from ..models import BodyIndex
from ..serializers import BodyIndexSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response



class Bodyindex(APIView):

    def get(self, request, id=None):
        if id:
            return self.get_individual(request, id)
        return self.get_all(request)

    def get_all(self, request):
        try:
            bodyindex = BodyIndex.objects.all()
            if bodyindex.exists():
                data = BodyIndexSerializer(bodyindex, many=True).data
                return Response({'message': 'bodyindex retrieved successfully', 'data': data}, status=status.HTTP_200_OK)
            return Response({'message': 'No bodyindex available'}, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get_individual(self, request, id):
        try:
            bodyindex = get_object_or_404(BodyIndex, id=id)
            data = BodyIndexSerializer(bodyindex).data
            return Response({'message': 'bodyindex retrieved successfully', 'data': data}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        try:
            serializer = BodyIndexSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'bodyindex added successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, id):
        try:
            bodyindex = get_object_or_404(BodyIndex, id=id)
            bodyindex.delete()
            return Response({'message': 'bodyindex deleted successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request, id):
        try:
            bodyindex = get_object_or_404(BodyIndex, id=id)
            serializer = BodyIndexSerializer(data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'bodyindex updated successfully', 'data': serializer.data}, status=status.HTTP_200_OK)
            return Response({'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
