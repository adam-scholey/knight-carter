from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path

from core import views as core_views
from properties import views as property_views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", core_views.home, name="home"),
    path("properties/", property_views.property_list, name="properties"),
    path("properties/<int:pk>/", property_views.property_detail, name="property_detail"),
    path("landlord-services/", core_views.landlord_services, name="landlord_services"),
    path("about/", core_views.about, name="about"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
