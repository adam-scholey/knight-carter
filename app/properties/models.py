from django.db import models


class Property(models.Model):
    class Status(models.TextChoices):
        AVAILABLE = "available", "Available"
        LET_AGREED = "let_agreed", "Let Agreed"
        UNDER_OFFER = "under_offer", "Under Offer"
        WITHDRAWN = "withdrawn", "Withdrawn"  # Soft delete - not shown on public site

    class PropertyType(models.TextChoices):
        DETACHED = "detached", "Detached"
        SEMI_DETACHED = "semi_detached", "Semi-Detached"
        TERRACED = "terraced", "Terraced"
        FLAT = "flat", "Flat"
        BUNGALOW = "bungalow", "Bungalow"

    address = models.CharField(max_length=200)
    town = models.CharField(max_length=100)
    postcode = models.CharField(max_length=10, blank=True)
    price_pcm = models.PositiveIntegerField(verbose_name="Rent (£ pcm)")
    deposit = models.PositiveIntegerField(blank=True, null=True)
    bedrooms = models.PositiveSmallIntegerField()
    bathrooms = models.PositiveSmallIntegerField()
    sqft = models.PositiveIntegerField(blank=True, null=True, verbose_name="Sq ft")
    property_type = models.CharField(
        max_length=20, choices=PropertyType.choices, default=PropertyType.DETACHED
    )
    status = models.CharField(
        max_length=20, choices=Status.choices, default=Status.AVAILABLE
    )
    description = models.TextField(blank=True)
    featured = models.BooleanField(default=False)
    available_date = models.CharField(max_length=50, default="Available Now")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "properties"
        ordering = ["-featured", "-created_at"]

    def __str__(self):
        return f"{self.address}, {self.town}"


class PropertyImage(models.Model):
    property = models.ForeignKey(
        Property, on_delete=models.CASCADE, related_name="images"
    )
    image = models.ImageField(upload_to="properties/")
    caption = models.CharField(max_length=200, blank=True)
    is_primary = models.BooleanField(default=False)
    order = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return f"Image for {self.property.address}"
