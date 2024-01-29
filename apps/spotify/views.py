from django.shortcuts import render
from datetime import datetime

hour = datetime.now().hour
if (6 <= hour < 12):
    hello = 'Bom dia'
elif (12 <= hour < 18):
    hello = 'Boa tarde'
else:
    hello = 'Boa noite'


def index(request):
    return render(request, 'spotify/index.html', {'a':hello})
