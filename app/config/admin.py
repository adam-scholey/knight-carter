from django.contrib import admin
from django.contrib.auth.models import User, Group

# Unregister default Django admin models we don't need
admin.site.unregister(User)
admin.site.unregister(Group)
