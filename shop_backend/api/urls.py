from django.urls import path

<<<<<<< HEAD
from api.views import category_list, products_list, UserAPIView, product_detail, products_by_category, OrdersListAPIView, category_detail

urlpatterns = [
     path('categories/', category_list),
     path('products/', products_list),
     path('products/<int:product_id>/', product_detail),
     path('categories/<int:category_id>/', category_detail),
     path('categories/<int:category_id>/products', products_by_category),
     path('users/', UserAPIView.as_view()),
=======
from api.views import category_list

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
     path('categories/', category_list),
>>>>>>> parent of d3a78af7... data for Category/Product/User

    # path('login/', obtain_jwt_token),

]
