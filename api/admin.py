from django.contrib import admin
from .models import *

# All the models that are to be displayed in the admin interface
# should be registered here.
# The admin interface is a web interface that allows you to
# view, add, edit, delete, and so on.
# Please refer to the Django documentation for more information.
# https://docs.djangoproject.com/en/
# Register the models with filter, search and display options.

admin.site.register(AboutUs)
admin.site.register(SuccessStories)
admin.site.register(BeforeAfterImage)
admin.site.register(Campaign)
admin.site.register(Award)

@admin.register(Hero)
class HeroAdmin(admin.ModelAdmin):
    list_display = ('title',)

@admin.register(Region)
class RegionAdmin(admin.ModelAdmin):
    list_filter = ("country", "city")
    list_display = ("country", "city")

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_filter = ("region__country",)
    list_display = ("title", "region", "created_at")

@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_filter = ("position", "region__country",)
    list_display = ("name", "email", "phone", "position")

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_filter = ("region__country",)
    list_display = ("title", "region", "created_at")

@admin.register(ServiceVideo)
class ServiceVideoAdmin(admin.ModelAdmin):
    list_filter = ("service__title",)
    list_display = ("title", "service")

@admin.register(Career)
class CareerAdmin(admin.ModelAdmin):
    list_filter = ("region__country",)
    list_display = ("title", "region", "programType")

@admin.register(CharityProgram)
class CharityProgramAdmin(admin.ModelAdmin):
    list_filter = ("region__country",)
    list_display = ("title", "region")

@admin.register(HealthStatus)
class HealthStatusAdmin(admin.ModelAdmin):
    list_display = ("title",)

@admin.register(Orphan)
class OrphanAdmin(admin.ModelAdmin):
    list_filter = ("region__country", "age", "gender",)
    list_display = ("name", "region", "age", "gender", "health_status", "reference_number")
    search_fields = ("name", "age", "health_status__title", "region__country", "reference_number")

@admin.register(ContactForm)
class ContactFormAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "posted_at")
    search_fields = ("name", "message", "email")

@admin.register(DonationForm)
class DonationFormAdmin(admin.ModelAdmin):
    list_filter = ("type",)
    list_display = ("title", "description", "type", "fundraiseup_code")
    search_fields = ("title", "description", "type", "fundraiseup_code")

@admin.register(SocialMediaPosts)
class SocialMediaPostsAdmin(admin.ModelAdmin):
    list_filter = ("platform", "region__country",)
    list_display = ("title", "content", "region", "platform")
    search_fields = ("platform", "region__country", "title", "content")

admin.site.register(Program)
admin.site.register(RahmaAcademyProgramsOffered)
admin.site.register(MentalHealthProgramsOffered)
