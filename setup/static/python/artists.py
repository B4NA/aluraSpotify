import requests
import numpy as np

url = 'http://localhost:3000/artists'
jsonRequest = np.array(requests.get(url).json())
nameList = np.array([x['name'] for x in jsonRequest])

def search(name):
    booleanArray = np.char.find(np.char.lower(nameList), name.lower()) != -1
    returnArray = jsonRequest[booleanArray]
    
    if (len(returnArray) != 0):
        return list(returnArray)
    else:
        return False
