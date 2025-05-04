"""agms URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('',views.SampleView.as_view(),name='sample'),
    path('membership/',views.membership.as_view(),name='membership'),
    path('membership/<int:id>/',views.membership.as_view(),name='membership'),
    path('equipment/',views.equipment.as_view(),name='equipment'),
    path('equipment/<int:id>/',views.equipment.as_view(),name='equipment'),
    path('trainer/',views.trainer.as_view(),name='trainer'),
    path('trainer/<int:id>/',views.trainer.as_view(),name='trainer'),
    path('measurement/',views.measurement.as_view(),name='measurement'),
    path('measurement/<int:id>/',views.measurement.as_view(),name='measurement'),
    path("create-order/", views.create_order.as_view, name="create_order"),
    path("verify-payment/", views.verify_payment, name="verify_payment"),
    path("payment/", views.payment_page, name="payment_page"),
    path('bodyindex/',views.bodyindex.as_view(),name='bodyindex'),
    path('bodyindex/<int:id>/',views.bodyindex.as_view(),name='bodyindex'),
    path('workout/',views.workout.as_view(),name='workout'),
    path('workout/<int:id>/',views.workout.as_view(),name='workout'),
    path('workoutplan/',views.workout_plan.as_view(),name='workoutplan'),
    path('workoutplan/<int:id>/',views.workout_plan.as_view(),name='workoutplan'),
    path('dietplan/',views.dietplan.as_view(),name='dietplan'),
    path('dietplan/<int:id>/',views.dietplan.as_view(),name='dietplan'),
    

]

