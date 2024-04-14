from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.CategoryListCreate.as_view(), name='category-list'),
    path('', views.CourseListCreate.as_view(), name='course-list'),
    path('<slug:slug>/', views.CourseDetail.as_view(), name='course-detail'),
    path('lessons/', views.LessonListCreate.as_view(), name='lesson-list'),
    path('lessons/<course_id>/', views.LessonList.as_view(), name='lesson-list'),
]
