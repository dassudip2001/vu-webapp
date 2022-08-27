
# Create your tests here.
from django.urls import path, include
from home import views

urlpatterns = [
    path('', views.home, name="home"),
    path('steganalysis', views.steganalysis, name="steganalysis"),

]
