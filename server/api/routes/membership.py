from django.shortcuts import get_object_or_404
from ..models import MembershipPlan
from .. import serializers
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

class Membership(APIView):

    def get(self, request, id=None):
        if id:
            return self.get_individual(request, id)
        return self.get_all(request)

    def get_all(self, request):
        try:
            membership = MembershipPlan.objects.all()
            if membership.exists():
                data = serializers.MembershipSerializer(membership, many=True).data
                return Response({'message': 'Membership plans retrieved successfully', 'data': data}, status=status.HTTP_200_OK)
            return Response({'message': 'No membership plans available'}, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get_individual(self, request, id):
        try:
            membership = get_object_or_404(MembershipPlan, id=id)
            data = serializers.MembershipSerializer(membership).data
            return Response({'message': 'Membership plan retrieved successfully', 'data': data}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        try:
            serializer = serializers.MembershipSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Membership plan added successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, id):
        try:
            membership = get_object_or_404(MembershipPlan, id=id)
            membership.delete()
            return Response({'message': 'Membership plan deleted successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request, id):
        try:
            membership = get_object_or_404(MembershipPlan, id=id)
            serializer = serializers.MembershipSerializer(membership, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Membership plan updated successfully', 'data': serializer.data}, status=status.HTTP_200_OK)
            return Response({'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
