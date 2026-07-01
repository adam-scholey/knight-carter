from django import template

register = template.Library()

PLACEHOLDER_IMAGES = [
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=500&fit=crop",
]


@register.simple_tag
def placeholder_image(property_id, size="800&h=500"):
    """Return a varied placeholder image URL based on property ID."""
    idx = (property_id - 1) % len(PLACEHOLDER_IMAGES)
    url = PLACEHOLDER_IMAGES[idx]
    if size != "800&h=500":
        url = url.replace("w=800&h=500", f"w={size}")
    return url
