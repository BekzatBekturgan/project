from django.urls import path


from api.views import category_list, products_list, UserAPIView, product_detail, products_by_category, OrdersListAPIView



urlpatterns = [
     path('categories/', category_list),
     path('products/', products_list),
     path('users/', UserAPIView.as_view()),
     path('orders/', OrdersListAPIView.as_view()),

     path('products/<int:product_id>/', product_detail),
     path('categories/<int:category_id>/products', products_by_category),
     path('orders/', OrdersListAPIView.as_view())

]
