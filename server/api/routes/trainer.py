from django.shortcuts import get_object_or_404
from ..serializers import TrainerSerializer
from ..models import Trainer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

class Trainers(APIView):
    
    def get(self,request,id=None):
        if id:
            return self.get_individual(request,id)
        return self.get_all(request)
    
    def get_all(self,request):
        try:
            trainer = Trainer.objects.all()
            if trainer.exists():
                data = TrainerSerializer(trainer,many=True).data
                return Response({'message': 'Trainers retrieved successfully', 'data': data}, status=status.HTTP_200_OK)
            return Response({'message': 'Trainers are not available'}, status=status.HTTP_204_NO_CONTENT)
                
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def get_individual(self,request,id):
        try:
            trainer = get_object_or_404(Trainer,id=id)
            data = TrainerSerializer(trainer).data
            return Response({'message':'Trainer retrieved successfully','data':data}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    def post(self, request):
        try:
            trainer = TrainerSerializer(data=request.data)
            if trainer.is_valid():
                trainer.save()
                return Response({'message': 'Trainer created successfully', 'data': trainer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': trainer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
            
    def delete(self,request,id):
        try:
            trainer = get_object_or_404(Trainer,id=id)
            trainer.delete()
            return Response({'message': 'Trainer deleted successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
        
    def put(self,request,id):
        try:
            trainer = get_object_or_404(Trainer,id=id)
            data = TrainerSerializer(trainer,data=request.data,partial=True)
            if data.is_valid():
                data.save()
                return Response({'message': 'Trainer updated successfully'}, status=status.HTTP_200_OK)
            return Response({'message': data.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
        
        