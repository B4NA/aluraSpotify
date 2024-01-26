from django.contrib import admin
from django.urls import path
from apps.spotify.views import index

urlpatterns = [
    path('', index, name='index'),
]