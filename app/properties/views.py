from django.shortcuts import get_object_or_404, render

from .models import Property


def property_list(request):
    properties = Property.objects.prefetch_related("images").exclude(status=Property.Status.WITHDRAWN)

    # Filters
    status = request.GET.get("status")
    if status:
        properties = properties.filter(status=status)

    property_type = request.GET.get("type")
    if property_type:
        properties = properties.filter(property_type=property_type)

    price = request.GET.get("price")
    if price:
        if price == "0-750":
            properties = properties.filter(price_pcm__lte=750)
        elif price == "750-1000":
            properties = properties.filter(price_pcm__gte=750, price_pcm__lte=1000)
        elif price == "1000-1500":
            properties = properties.filter(price_pcm__gte=1000, price_pcm__lte=1500)
        elif price == "1500+":
            properties = properties.filter(price_pcm__gte=1500)

    bedrooms = request.GET.get("bedrooms")
    if bedrooms:
        properties = properties.filter(bedrooms=bedrooms)

    context = {
        "properties": properties,
        "current_status": status or "",
        "current_type": property_type or "",
        "current_price": price or "",
        "current_bedrooms": bedrooms or "",
        "status_choices": Property.Status.choices,
        "type_choices": Property.PropertyType.choices,
    }
    return render(request, "pages/properties.html", context)


def property_detail(request, pk):
    property_obj = get_object_or_404(
        Property.objects.prefetch_related("images").exclude(status=Property.Status.WITHDRAWN), pk=pk
    )
    return render(request, "pages/property_detail.html", {"property": property_obj})
