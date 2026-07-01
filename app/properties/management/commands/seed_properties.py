from django.core.management.base import BaseCommand

from properties.models import Property


SAMPLE_PROPERTIES = [
    {
        "address": "4 Woodland Drive",
        "town": "Ilkley",
        "postcode": "LS29 8QT",
        "price_pcm": 1450,
        "deposit": 1673,
        "bedrooms": 4,
        "bathrooms": 2,
        "sqft": 1850,
        "property_type": "detached",
        "status": "available",
        "featured": True,
        "description": "A stunning four-bedroom detached family home set in a quiet cul-de-sac with south-facing garden, modern kitchen, and off-street parking for two vehicles.",
    },
    {
        "address": "12 Victoria Terrace",
        "town": "Otley",
        "postcode": "LS21 3DP",
        "price_pcm": 895,
        "deposit": 1033,
        "bedrooms": 2,
        "bathrooms": 1,
        "sqft": 780,
        "property_type": "terraced",
        "status": "available",
        "featured": True,
        "description": "Beautifully renovated Victorian terrace with original features, open-plan living, and a private courtyard garden. Walking distance to town centre.",
    },
    {
        "address": "Flat 7, The Maltings",
        "town": "Skipton",
        "postcode": "BD23 1LN",
        "price_pcm": 725,
        "deposit": 836,
        "bedrooms": 1,
        "bathrooms": 1,
        "sqft": 520,
        "property_type": "flat",
        "status": "available",
        "featured": True,
        "description": "Modern one-bedroom apartment in a converted mill building with exposed beams, canal views, and allocated parking. Bills-efficient with high EPC rating.",
    },
    {
        "address": "28 Moor Lane",
        "town": "Burley-in-Wharfedale",
        "postcode": "LS29 7JQ",
        "price_pcm": 1200,
        "deposit": 1385,
        "bedrooms": 3,
        "bathrooms": 2,
        "sqft": 1200,
        "property_type": "semi_detached",
        "status": "let_agreed",
        "featured": False,
        "description": "Well-presented three-bedroom semi with driveway, garage, and views towards the moor. Recently refurbished throughout with new boiler and kitchen.",
    },
    {
        "address": "15 Park Road",
        "town": "Guiseley",
        "postcode": "LS20 8AR",
        "price_pcm": 950,
        "deposit": 1096,
        "bedrooms": 2,
        "bathrooms": 1,
        "sqft": 850,
        "property_type": "semi_detached",
        "status": "available",
        "featured": True,
        "description": "Charming two-bedroom semi-detached with a large rear garden and driveway. Close to excellent schools and transport links.",
    },
    {
        "address": "Apartment 3, Riverside Court",
        "town": "Ilkley",
        "postcode": "LS29 9EG",
        "price_pcm": 1650,
        "deposit": 1904,
        "bedrooms": 3,
        "bathrooms": 2,
        "sqft": 1400,
        "property_type": "flat",
        "status": "under_offer",
        "featured": False,
        "description": "Luxury penthouse apartment overlooking the River Wharfe. Open-plan living, designer kitchen, two en-suites, and secure underground parking.",
    },
]


class Command(BaseCommand):
    help = "Seed the database with sample property listings"

    def handle(self, *args, **options):
        if Property.objects.exists():
            self.stdout.write(self.style.WARNING("Properties already exist — skipping seed."))
            return

        for data in SAMPLE_PROPERTIES:
            Property.objects.create(**data)

        self.stdout.write(self.style.SUCCESS(f"Created {len(SAMPLE_PROPERTIES)} sample properties."))
