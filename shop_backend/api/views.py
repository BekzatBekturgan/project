from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import Category, Product, Order
from api.serializers import CategorySerializer, ProductSerializer, OrderSerializer, UserSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated


#CRUD and Serializer done

@permission_classes([IsAuthenticated])
@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


#GET and SERIALIZER

@api_view(['GET'])
def products_by_category(request, category_id):
    try:
        categories = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        products = categories.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

#CRUD AND SERIALIZER DONE
@api_view(['GET', 'POST'])
def products_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

#CRUD AND SERIALIZER DONE
@api_view(['GET', 'PUT', 'DELETE'])
def product_detail(request, product_id):
    try:
        products = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return Response({'error': str(e)})
    if request.method == 'GET':
        serializer = ProductSerializer(products)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ProductSerializer(instance=products, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        products.delete()
        return Response({'deleted': True})


#order

class OrdersListAPIView(APIView):
    def get(self, request):
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# user

class UserAPIView(APIView):
    def get(self, request):
        users = User.users.all()
        serializer = UserSerializer(users, many=True)

        return Response(serializer.data)


class UserDetailsAPIView(APIView):
        def get_object(self, id):
            try:
                return User.objects.get(id=id)
            except User.DoesNotExist as e:
                return Response({'error': str(e)})

        def get(self, request, id):
            user = self.get_object(id)
            serializer = UserSerializer(user)
            return Response(serializer.data)


# class LoginView(APIView):
#     def post(self, request):
#         serializer = UserSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data["user"]
#         django_login(request, user)
#         token, created = Token.objects.get_or_create(user=user)
#         return Response({"token": token.key}, status=200)
#
#
# class LogoutView(APIView):
#     authentication_classes = (TokenAuthentication, )
#
#     def post(self, request):
#         django_logout(request)
#         return Response({"message": "You've logged out"}, status=204)
