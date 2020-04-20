from rest_framework import serializers
from api.models import Category, Product, Order, User


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
    # category = CategorySerializer2(read_only=True)
    category_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Product
        fields = "__all__"



class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '_all_'


class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    username = serializers.CharField()
    password = serializers.CharField()
    firstName = serializers.CharField()
    lastName = serializers.CharField()
    address = serializers.CharField()
    phone = serializers.CharField()

    def create(self, validated_data):
        user = User.objects.create(username=validated_data.get('username'),
                                   password=validated_data.get('password'),
                                   firstname=validated_data.get('firstName'),
                                   lastname=validated_data.get('lastName'),
                                   address=validated_data.get('address'),
                                   phone=validated_data.get('phone'),
                                   )

        return user

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.password = validated_data.get('password', instance.password)
        instance.firstName = validated_data.get('firstName', instance.firstname)
        instance.lastName = validated_data.get('lastName', instance.lastName)
        instance.address = validated_data.get('address', instance.address)
        instance.address = validated_data.get('phone', instance.phone)
        instance.save()
        return instance
