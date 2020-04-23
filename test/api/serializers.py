from rest_framework import serializers

from api.models import Category, Product, Order
from django.contrib.auth.models import User


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(name=validated_data.get('name'))
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance



class ProductSerializer(serializers.ModelSerializer):

    category_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Product
        fields = '__all__'



class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    username = serializers.CharField()
    password = serializers.CharField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()

    def create(self, validated_data):
        user = User.objects.create(username=validated_data.get('username'),
                                   password=validated_data.get('password'),
                                   first_name=validated_data.get('first_name'),
                                   last_name=validated_data.get('last_name'),
                                   )

        return user

    # def update(self, instance, validated_data):
    #     instance.username = validated_data.get('username', instance.username)
    #     instance.password = validated_data.get('password', instance.password)
    #     instance.firstName = validated_data.get('firstName', instance.firstname)
    #     instance.lastName = validated_data.get('lastName', instance.lastName)
    #     instance.address = validated_data.get('address', instance.address)
    #     instance.phone = validated_data.get('phone', instance.phone)
    #     instance.save()
    #     return instance


class OrderSerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    class Meta:
        model = Order
        fields = ('id', 'username', 'items')