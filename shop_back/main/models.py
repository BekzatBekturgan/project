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
    # image =
    sale = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'plink': self.plink,
            'sale': self.sale
        }
