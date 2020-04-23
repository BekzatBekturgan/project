from django.db import models
from django.contrib.auth.models import User

class Company(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(default="")
    city = models.CharField(max_length=200)
    address = models.FloatField(default="")



    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address

        }

class Vacancy(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(default="")
    salary = models.FloatField(default="")
    company = models.ForeignKey(Company,  on_delete=models.CASCADE,
                                related_name='vacancies')


    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company

        }
# --------------------------------------

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



class MyManager(models.Manager):
    def get_users_orders(self, user):
        return self.filter(user=user)


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    items = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='items')
    objects = MyManager()

    def __str__(self):
        return self.items.name

    def to_json(self):
        return{
            'id': self.id,
            'username': self.user,
            'items': self.items
        }