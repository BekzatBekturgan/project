from django.urls import path
from main.views.views import category_list
urlpatterns = [

    path('categories/', category_list),
]