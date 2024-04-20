from rest_framework import generics
from .models import Enroll
from .serializers import EnrollSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class EnrollListCreateView(generics.ListCreateAPIView):
    queryset = Enroll.objects.all()
    serializer_class = EnrollSerializer

class EnrollDetailView(APIView):
    def get(self, request, user_id):
        try:
            enrollments = Enroll.objects.filter(user_id=user_id)
            serializer = EnrollSerializer(enrollments, many=True)
            return Response(serializer.data)
        except Enroll.DoesNotExist:
            return Response({"message": "Enrollments not found for this user"}, status=status.HTTP_404_NOT_FOUND)