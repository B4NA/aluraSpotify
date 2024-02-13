from datetime import datetime

def hourPy():
    hour = datetime.now().hour
    if (6 <= hour < 12):
        hello = 0
    elif (12 <= hour < 18):
        hello = 1
    else:
        hello = 2

    return hello