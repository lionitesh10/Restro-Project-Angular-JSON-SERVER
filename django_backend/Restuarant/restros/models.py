from django.db import models

class Restros(models.Model):
    name=models.CharField(max_length=128)
    address=models.CharField(max_length=128)
    email=models.EmailField()
    
