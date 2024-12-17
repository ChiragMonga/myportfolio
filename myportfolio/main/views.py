from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def projects(request):
    return render(request, 'projects.html')

def contact(request):
    return render(request, 'contact.html')

def main_page(request):
    return render(request, 'main_page.html', {
        'name': 'Your Name',
        'tagline': 'Software Developer | Tech Enthusiast',
        'skills': ['Python', 'Django', 'React', 'AWS'],
        'projects': [
            {'name': 'Project 1', 'description': 'A cool project', 'url': 'https://github.com/yourrepo/project1'},
            {'name': 'Project 2', 'description': 'Another cool project', 'url': 'https://github.com/yourrepo/project2'}
        ],
    })
