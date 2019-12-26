from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def scanface(request):
    return render(request, 'scan_face.html')

def register(request):
    return render(request, 'registration.html')

def verify(request):
    return render(request, 'verify.html')

def access(request):
    return render(request, 'access.html')

def qr(request):
    return render(request, 'qr.html')