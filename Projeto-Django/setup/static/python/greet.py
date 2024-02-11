from datetime import datetime

def hourPy():
    hour = datetime.now().hour
    if (6 <= hour < 12):
        hello = 'Bom dia'
    elif (12 <= hour < 18):
        hello = 'Boa tarde'
    else:
        hello = 'Boa noite'

    return hello