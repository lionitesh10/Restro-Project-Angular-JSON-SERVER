from .models import Restros
from rest_framework import serializers

class RestrosSerializer(serializers.ModelSerializer):
    class Meta:
        model=Restros
        fields='__all__'
