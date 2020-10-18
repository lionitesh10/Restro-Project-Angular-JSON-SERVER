from django.urls import path
from . import views

urlpatterns=[
    path('restros/',views.RestroCRView.as_view()),
    path('restros/<int:pk>',views.RestroDetailView.as_view())
]