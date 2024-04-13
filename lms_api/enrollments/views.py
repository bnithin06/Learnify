from rest_framework import generics
from .models import Enroll
from .serializers import EnrollSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


class EnrollListCreateView(generics.ListCreateAPIView):
    queryset = Enroll.objects.all()
    serializer_class = EnrollSerializer

class EnrollDetailView(APIView):
    def get(self, request, pk):
        try:
            enrollment = Enroll.objects.get(pk=pk)
            serializer = EnrollSerializer(enrollment)
            return Response(serializer.data)
        except Enroll.DoesNotExist:
            return Response({"message": "Enrollment not found"}, status=404)