from django.db import models
from django.utils.timezone import now

from accounts.models import User
from courses.models import Course


class Enroll(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name='students')
    course = models.ForeignKey(Course, on_delete=models.CASCADE,related_name='courses')
    enrollment_date = models.DateTimeField(default=now)

    class Meta:
        unique_together = ('user', 'course')

    def __str__(self):
        return f'{self.user.username} enrolled in {self.course.title}'
