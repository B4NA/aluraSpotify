from django.urls import path
from apps.users.views import login, logon

urlpatterns = [
    path('login', login, name='login'),
    path('logon', logon, name='logon'),
]