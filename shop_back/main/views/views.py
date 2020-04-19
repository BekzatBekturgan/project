from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from main.models import Category, Product
from main.serializers import CategorySerializer, ProductSerializer

#CRUD and Serializer done
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
def product_detail(request, category_id):
    try:
        products = Product.objects.get(id=category_id)
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

