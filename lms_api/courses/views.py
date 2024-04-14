from rest_framework import generics
from .models import Course, Category, Lesson
from .serializers import CourseSerializer, CategorySerializer, LessonSerializer

class CategoryListCreate(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CourseListCreate(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    lookup_field = 'slug'  # Set the lookup field to 'slug'

class LessonListCreate(generics.ListCreateAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

class LessonList(generics.ListAPIView):
    serializer_class = LessonSerializer

    def get_queryset(self):
        course_id = self.kwargs['course_id']
        return Lesson.objects.filter(course_id=course_id)