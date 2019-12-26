
from django.contrib import admin
from . import views
from django.urls import path, include
urlpatterns = [
    path('', views.index , name="main"),
    path('scanface/',views.scanface, name="scanface"),
    path('register/',views.register, name="register" ),
    path('verify/',views.verify, name="verify"), 
]
