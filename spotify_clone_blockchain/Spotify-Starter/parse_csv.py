from google_images_search import GoogleImagesSearch
import pandas as pd
import json


KEY = "AIzaSyDt0GqHGbYreOhzFv9D9jyVrm_9SXTHE4I"
IMAGE = "image-search"

_search_params = {
    'q': '...',
    'num': 1,
    'fileType': 'gif',

}

gis.search(search_params=_search_params)

is = GoogleImagesSearch(KEY, PROJECT)
df = pd.read_csv('top_100_streamed.csv')

res = {list(df.loc[:,"artist"])[i]:list(df.loc[:,"title"])[i] \
 for i in range(len(list(df.loc[:,"artist"] )))}

with open('top100.json', 'w') as ink:
    ink.write(json.dumps(res))


 #combine 2 arrays into dictionary
 #res = [list1[index]:list2[index] for index in range(len(list1))]

#
# list(df.loc[:,"artist"]
#
# list(df.loc[:,"artist"]
# https://pypi.org/project/Google-Images-Search/
