from django.urls import path

<<<<<<< HEAD
from api.views import category_list, products_list, UserAPIView, product_detail, products_by_category, OrdersListAPIView, LoginView, LogoutView
=======

from api.views import category_list, products_list, UserAPIView, product_detail, products_by_category, OrdersListAPIView
>>>>>>> 4e2a46dbc7b515b2683c23d6a1c58bcaf59a1def



urlpatterns = [
     path('categories/', category_list),
     path('products/', products_list),
     path('users/', UserAPIView.as_view()),
     path('orders/', OrdersListAPIView.as_view()),

     path('products/<int:product_id>/', product_detail),
     path('categories/<int:category_id>/products', products_by_category),
<<<<<<< HEAD
     path('orders/', OrdersListAPIView.as_view()),
     path('login/', LoginView.as_view()),
     path('logout/', LogoutView.as_view()),
=======
     path('orders/', OrdersListAPIView.as_view())

>>>>>>> 4e2a46dbc7b515b2683c23d6a1c58bcaf59a1def
]
