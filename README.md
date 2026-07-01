# Carter & Knight — Professional Letting Services

Full-stack Django letting agency website for landlords. PostgreSQL database, modern admin panel, Docker-ready.

## Stack

- **Backend:** Django 5.1, PostgreSQL 16, Gunicorn
- **Frontend:** Django templates, Instrument Serif + Inter, vanilla JS
- **Admin:** django-unfold (modern Material-style admin)
- **Infrastructure:** Docker Compose (Django + Postgres + Nginx)

## Quick Start

```bash
# 1. Start Docker
docker compose up -d

# 2. Create admin user
docker compose exec web python manage.py createsuperuser

# 3. Seed sample properties
docker compose exec web python manage.py seed_properties

# 4. Visit
#    Site:  http://localhost
#    Admin: http://localhost/admin/
```

## Local Dev (without Docker)

```bash
# Start Postgres container only
docker compose up db -d

# Create venv and install deps
python -m venv .venv
.venv\Scripts\activate  # Windows
pip install -r requirements.txt

# Run Django
cd app
python manage.py migrate
python manage.py seed_properties
python manage.py createsuperuser
python manage.py runserver
```

## Project Structure

```
├── app/                  # Django project
│   ├── config/           # Settings, URLs, WSGI
│   ├── properties/       # Property listings app
│   ├── core/             # Contact form, enquiries
│   ├── templates/        # HTML templates
│   └── static/           # CSS, JS, images
├── nginx/                # Nginx config
├── docker-compose.yml
├── Dockerfile
├── requirements.txt
└── .env.example
```

## Features

- Property listings with search/filter (price, type, status, bedrooms)
- Property detail pages with image gallery
- Contact form that stores enquiries in the database
- Landlord services page
- Modern admin panel for managing properties and enquiries
- Responsive design focused on landlord audience
- Docker Compose for portable deployment
