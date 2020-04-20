from django.urls import path

from api.views import category_list, products_list, UserAPIView

urlpatterns = [
     path('categories/', category_list),
     path('products/', products_list),
     path('users/', UserAPIView.as_view()),

    # path('login/', obtain_jwt_token),
]
