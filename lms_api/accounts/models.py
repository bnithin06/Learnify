from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser

from accounts.manager import UserManager

class User(AbstractUser):
    email = models.EmailField(unique=True, blank=False,
                              error_messages={
                                  'unique': "A user with that email already exists.",
                              })
    is_teacher = models.BooleanField(default=False)
    is_student = models.BooleanField(default=False)
    phonenumber = models.CharField(max_length=20, blank=True, null=True)
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    def get_full_name(self):
        return self.email

    def get_short_name(self):
        return self.email

    objects = UserManager()

