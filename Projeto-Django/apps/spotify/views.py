from django.shortcuts import render
from setup.static.python import greet, artists, languages

def index(request, language='pt'):
    lang = languages.language[language]
    return render(request, 'spotify/index.html', {'lang':lang,'greet':lang[greet.hourPy()],'range':lang[13:28]})

def cards(request, image_id, language='pt'):
    lang = languages.language[language]
    return render(request, 'spotify/cards.html', {'lang':lang,'image_id':image_id})

def search(request, name, language='pt'):
    lang = languages.language[language]
    artist = artists.search(name)

    if (not artist == False):
        return render(request, 'spotify/search.html', {'lang':lang,'artist':artist})
    else:
        return render(request, 'spotify/index.html', {'lang':lang,'a':greet.hourPy()})
