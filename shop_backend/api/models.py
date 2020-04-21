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
    image = models.CharField(max_length=1000)
    sale = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'image': self.image,
            'sale': self.sale
        }

class User(models.Model):
    username = models.CharField(max_length=300)
    password = models.CharField(max_length=300)
    firstName = models.CharField(max_length=300)
    lastName = models.CharField(max_length=300)
    address = models.CharField(max_length=300)
    phone = models.CharField(max_length=300)



    def to_json(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password,
            'firstName': self.firstName,
            'lastName': self.lastName,
            'address': self.address,
            'phone': self.phone,

        }

class Order(models.Model):
    username =  models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    items = ArrayField(models.IntegerField(), default=list)

    def to_json(self):
        return{
            'id': self.id,
            'username': self.username,
            'items': self.items
        }