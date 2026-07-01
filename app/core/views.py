from django.shortcuts import render

from properties.models import Property
from .models import SiteSettings


def home(request):
    featured = Property.objects.filter(featured=True).exclude(status=Property.Status.WITHDRAWN).prefetch_related("images")[:6]
    site_settings = SiteSettings.objects.first()
    return render(request, "pages/home.html", {
        "featured_properties": featured,
        "site_settings": site_settings,
    })


def landlord_services(request):
    return render(request, "pages/landlord_services.html")


def about(request):
    return render(request, "pages/about.html")
