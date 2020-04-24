from django.urls import path

from api.views import category_list, products_list,products_by_category, product_detail, UserAPIView,UserDetailsAPIView, OrdersListAPIView
from rest_framework_jwt.views import obtain_jwt_token
urlpatterns = [
     path('categories/', category_list),
     path('categories/<int:category_id>/products/', products_by_category),
     path('products/', products_list),
     path('products/<int:product_id>', product_detail),
     path('users/', UserAPIView.as_view()),
     path('users/<int:id>', UserDetailsAPIView.as_view()),
     path('orders/', OrdersListAPIView.as_view()),
     path('login/', obtain_jwt_token),
]
