from django.contrib import admin
from django.urls import path
from apps.spotify.views import index, cards, search

urlpatterns = [
    path('<str:language>/', index, name='index'),
    path('<str:language>/cards/<int:image_id>', cards, name='cards'),
    path('<str:language>/search/<str:name>', search, name='search'),
]