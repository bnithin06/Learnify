from django.urls import path
from .views import EnrollListCreateView, EnrollDetailView

urlpatterns = [
    path('', EnrollListCreateView.as_view(), name='enroll-list-create'),
    path('<int:pk>/', EnrollDetailView.as_view(), name='enrollment-detail'),
]
