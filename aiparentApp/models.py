import pandas as pd
from django.db import models
import random
# Create your models here.

# data = pd.read_csv('suggestions.csv')  # Read csv file
# suggestions = data["Suggestions"].to_list()  # Convert Suggestions row to list
# list_len = len(suggestions)  # Get length of list
# index_list = []
# for i in range(list_len):
#     # check if i is already in list
#     if i in index_list:
#         # if yes, get new random number
#         index_list.append(random.randint(0, list_len - 1))
#     else:
#         index_list.append(random.randint(0, list_len - 1))
#
# print(index_list)
