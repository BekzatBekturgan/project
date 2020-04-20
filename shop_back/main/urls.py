from django.urls import path
<<<<<<< HEAD
from main.views.views import category_list
urlpatterns = [

    path('categories/', category_list),
]
=======

from main.views.views import OrdersListAPIView

from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    # path('companies/', company_list),
    # path('companies/<int:id>/', company_detail),
    # path('companies/<int:id>/vacancies/', company_vacancies),
    # path('vacancies/', vacancy_list),
    # path('vacancies/<int:id>', vacancy_detail),
    # path('vacancies/top_ten', vacancy_10),
    # path('login/', obtain_jwt_token),
    path('companies/', OrdersListAPIView.as_view()),
    # path('companies/<int:id>/', CompanyDetailAPIView.as_view()),
    # path('vacancies/', VacancyListAPIView.as_view()),
    # path('vacancies/<int:id>/', VacancyDetailAPIView.as_view()),
    # path('companies/<int:id>/vacancies/', CompanyWithVacancyAPIView.as_view()),
    # path('vacancies/top_ten', Top10VacancyAPIView.as_view())
]
>>>>>>> b90c405c2db8fe83bb86987d8d91a00b6c99f6bd
