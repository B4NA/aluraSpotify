from django.shortcuts import render
from setup.static.python import greet, artists

def index(request):
    return render(request, 'spotify/index.html', {'a':greet.hourPy()})

def cards(request, image_id):
    return render(request, 'spotify/cards.html', {'image_id':image_id})

def search(request, name):
    artist = artists.search(name)

    if (not artist == False):
        return render(request, 'spotify/search.html', {'artist':artist})
    else:
        return render(request, 'spotify/index.html', {'a':greet.hourPy()})
