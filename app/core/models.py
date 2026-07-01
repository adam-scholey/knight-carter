from django.db import models


class SiteSettings(models.Model):
    """Singleton model for site-wide settings like hero image"""
    hero_image = models.ImageField(upload_to="hero/", blank=True, null=True)
    hero_title = models.CharField(max_length=200, default="Knight & Carter")
    hero_subtitle = models.CharField(max_length=300, default="Premium investment properties, handpicked for landlords.")
    
    class Meta:
        verbose_name_plural = "Site Settings"
    
    def __str__(self):
        return "Site Settings"
    
    def save(self, *args, **kwargs):
        self.pk = 1  # Always use pk=1 for singleton
        super().save(*args, **kwargs)
