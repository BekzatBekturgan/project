from django.contrib.postgres.fields import ArrayField
from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=500)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField(default=0)
    description = models.TextField()
    plink = models.TextField()
    image = ArrayField(models.CharField())
    sale = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'plink': self.plink,
            'image': self.image,
            'sale': self.sale
        }

class User(models.Model):
    username: models.CharField(max_length=300)
    password: models.CharField(max_length=300)
    firstName: models.CharField(max_length=300)
    lastName: models.CharField(max_length=300)
    address: models.CharField(max_length=300)
    phone: models.CharField(max_length=300)
    cart: ArrayField(models.IntegerField())


    def to_json(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password,
            'firstname': self.firstName,
            'lastname': self.lastName,
            'address': self.address,
            'phone': self.phone,
            'cart': self.cart,
        }

class Order(models.Model):
    username: models.ForeignKey(User, on_delete=models.CASCADE, related_name='users')
    items: ArrayField(models.IntegerField())

    def to_json(self):
        return{
            'id': self.id,
            'username': self.username,
            'items': self.items
        }