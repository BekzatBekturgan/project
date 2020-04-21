from django.urls import path

<<<<<<< HEAD
<<<<<<< HEAD
from api.views import category_list, products_list, UserAPIView, product_detail, products_by_category, OrdersListAPIView, category_detail
=======
from api.views import category_list, products_list, UserAPIView
>>>>>>> parent of e391a960... urls added, category detail added

urlpatterns = [
     path('categories/', category_list),
     path('products/', products_list),
     path('users/', UserAPIView.as_view()),
=======
from api.views import category_list

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
     path('categories/', category_list),
>>>>>>> parent of d3a78af7... data for Category/Product/User

    # path('login/', obtain_jwt_token),

]
