from django.contrib import admin
from unfold.admin import ModelAdmin, TabularInline

from .models import Property, PropertyImage


class PropertyImageInline(TabularInline):
    model = PropertyImage
    extra = 1
    fields = ["image", "caption", "is_primary", "order"]


@admin.register(Property)
class PropertyAdmin(ModelAdmin):
    list_display = [
        "address",
        "town",
        "price_pcm",
        "bedrooms",
        "property_type",
        "status",
        "featured",
    ]
    list_filter = ["status", "property_type", "featured", "town"]
    search_fields = ["address", "town", "postcode"]
    list_editable = ["status", "featured"]
    inlines = [PropertyImageInline]
    fieldsets = (
        (None, {"fields": ("address", "town", "postcode")}),
        ("Details", {"fields": ("price_pcm", "deposit", "bedrooms", "bathrooms", "sqft", "property_type")}),
        ("Listing", {"fields": ("status", "available_date", "featured", "description")}),
    )


@admin.register(PropertyImage)
class PropertyImageAdmin(ModelAdmin):
    list_display = ["property", "caption", "is_primary", "order"]
    list_filter = ["is_primary"]
