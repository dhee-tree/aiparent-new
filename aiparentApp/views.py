from django.views.decorators.csrf import requires_csrf_token
from django.shortcuts import render
from decouple import config
import pandas as pd
import openai

# OPENAI API call
def get_response(prompt):
    openai.api_key = config('OPENAI_API_KEY')
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        temperature=0.9,
        max_tokens=15,
    )

    return response.choices[0].text

# Create your views here.
@requires_csrf_token
def index(request):
    if request.method == "POST":
        user_prompt = request.POST.get('textarea')
        response = get_response(user_prompt)

        context = {
            'user_prompt': user_prompt,
            'response': response,
        }
        return render(request, 'response.html', context)
    else:
        # Reading the csv file
        data = pd.read_csv('aiparentApp/suggestions.csv')
        suggestions = data["Suggestions"].to_list()
        context = {
            'sug1': suggestions[0],
            'sug2': suggestions[1],
            'sug3': suggestions[2],
        }
        return render(request, 'index.html', context)
