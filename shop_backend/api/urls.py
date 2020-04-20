from django.urls import path

from api.views import category_list, products_list, UserAPIView, product_detail, products_by_category, OrdersListAPIView, category_detail

urlpatterns = [
     path('categories/', category_list),
     path('products/', products_list),
     path('products/<int:product_id>/', product_detail),
     path('categories/<int:category_id>/', category_detail),
     path('categories/<int:category_id>/products', products_by_category),
     path('users/', UserAPIView.as_view()),

    # path('login/', obtain_jwt_token),
]
