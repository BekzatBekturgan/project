from django.urls import path

from api.views import category_list

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
     path('categories/', category_list),

    # path('login/', obtain_jwt_token),

]
