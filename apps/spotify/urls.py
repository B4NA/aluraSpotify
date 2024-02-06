from django.contrib import admin
from django.urls import path
from apps.spotify.views import index, cards, search

urlpatterns = [
    path('', index, name='index'),
    path('cards/<int:image_id>', cards, name='cards'),
    path('search/<str:name>', search, name='search'),
]