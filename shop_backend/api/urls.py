from django.urls import path

<<<<<<< HEAD
from api.views import category_list, products_list, UserAPIView, OrdersListAPIView
=======
from api.views import category_list, products_list, UserAPIView, product_detail, products_by_category, OrdersListAPIView
>>>>>>> 73764aa0e73c2fbf9391a4cb0ff26216734bdd08


urlpatterns = [
     path('categories/', category_list),
     path('products/', products_list),
     path('users/', UserAPIView.as_view()),
<<<<<<< HEAD
     path('orders/', OrdersListAPIView.as_view()),
=======
     path('products/<int:product_id>/', product_detail),
     path('categories/<int:category_id>/products', products_by_category),
     path('orders/', OrdersListAPIView.as_view())
>>>>>>> 73764aa0e73c2fbf9391a4cb0ff26216734bdd08
]
