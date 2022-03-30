from django.urls import path
from . import views

urlpatterns = [
    path("home/", views.getHomePage, name="home"),
    path("our-work/", views.getOurWorkPage, name="Our-Work"),
    path("contact/", views.ContactPage, name="Contact-Page"),
    path("programs/", views.getProgramsPage, name="programs-Page"),
    path("service/<str:pk>/", views.getService, name="service-Page"),
    path("news/", views.getNewsPage, name="news"),
]