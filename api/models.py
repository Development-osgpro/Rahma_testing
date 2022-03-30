from wsgiref.validate import validator
from django.db import models
from .validators import validate_file_extension

# Create your models here.
class Region(models.Model):
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)

    def __str__(self):
        return self.country

class News(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    region = models.ForeignKey(Region, on_delete=models.PROTECT)

    image = models.ImageField(upload_to='images/', blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = "News"

class SocialMediaPosts(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    region = models.ForeignKey(Region, on_delete=models.PROTECT)

    image = models.ImageField(upload_to='images/')

    platform = models.CharField(max_length=100,
    choices=(("facebook", "Facebook"), ("twitter", "Twitter"), ("instagram", "Instagram"), ("youtube", "Youtube"))
    )

    post_link = models.CharField(max_length=555)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = "Social Media Posts"

class Member(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    phone = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    image = models.ImageField(upload_to='Team/', default="Members/default.jpg")
    region = models.ForeignKey(Region, on_delete=models.PROTECT)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Members"

class Service(models.Model):
    title = models.CharField(max_length=555)
    description = models.TextField()
    region = models.ForeignKey(Region, on_delete=models.PROTECT)
    mainImg = models.FileField(upload_to='Program/', default="Program/default.jpg", validators=[validate_file_extension])
    
    areas_served = models.IntegerField()
    total_beneficiaries = models.IntegerField()
    # program_type = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    main_video_url = models.CharField(max_length=555, blank=True, null=True)

    
    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']

class ServiceVideo(models.Model):
    title = models.CharField(max_length=555)
    service = models.ForeignKey(Service, on_delete=models.PROTECT)
    video_url = models.CharField(max_length=255)

    def __str__(self):
        return self.video_url
    
class Continent(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
class WaterWellProject(models.Model):
    country = models.ForeignKey(Region, on_delete=models.PROTECT)
    continent = models.ForeignKey(Continent, on_delete=models.PROTECT)
    type = models.CharField(max_length=255)
    life_span = models.CharField(max_length=255)
    cost = models.IntegerField()
    beneficiaries = models.IntegerField()

class Career(models.Model):
    title = models.CharField(max_length=555)
    description = models.TextField()
    region = models.ForeignKey(Region, on_delete=models.PROTECT)
    programType = models.CharField(max_length=255)
    responsibilities = models.TextField()
    posted_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # mainImg = models.ImageField(upload_to='Career/', default="Career/default.jpg")

    def __str__(self):
        return self.title

class CharityProgram(models.Model):
    title = models.CharField(max_length=555)
    description = models.TextField()
    region = models.ForeignKey(Region, on_delete=models.PROTECT)
    mainImg = models.ImageField(upload_to='CharityProgram/', default="Program/default.jpg")
    posted_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class HealthStatus(models.Model):
    title = models.CharField(max_length=555)
    posted_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Health Status"

class Orphan(models.Model):
    name = models.CharField(max_length=255)
    age = models.IntegerField()
    gender = models.CharField(max_length=255, choices=[("Male", "Male"), ("Female", "Female")])
    health_status = models.ForeignKey(HealthStatus, on_delete=models.PROTECT)
    parent_status = models.CharField(max_length=555)
    education_status = models.CharField(max_length=555)
    description = models.TextField()
    reference_number = models.CharField(max_length=255)
    region = models.ForeignKey(Region, on_delete=models.PROTECT)
    image = models.ImageField(upload_to='Orphan/', default="Members/user.png")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Orphans"

class ContactForm(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    message = models.TextField()
    posted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Contact Form"

# Mostly Frontend data

class Award(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='Award/')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Awards"

class CountriesData(models.Model):
    region = models.ForeignKey(Region, on_delete=models.PROTECT)

    attribute_1 = models.CharField(max_length=255)
    attribute_1_count = models.IntegerField()
    attribute_1_image = models.ImageField(upload_to='CountriesData/', verbose_name="Attribute 1 Image (66x55)")

    attribute_2 = models.CharField(max_length=255)
    attribute_2_count = models.IntegerField()
    attribute_2_image = models.ImageField(upload_to='CountriesData/', verbose_name="Attribute 2 Image (66x55)")

    attribute_3 = models.CharField(max_length=255)
    attribute_3_count = models.IntegerField()
    attribute_3_image = models.ImageField(upload_to='CountriesData/', verbose_name="Attribute 3 Image (66x55)")

    attribute_4 = models.CharField(max_length=255)
    attribute_4_count = models.IntegerField()
    attribute_4_image = models.ImageField(upload_to='CountriesData/', verbose_name="Attribute 4 Image (66x55)")

    def __str__(self):
        return self.country

    class Meta:
        verbose_name_plural = "Countries Data"

class Campaign(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=370)
    image = models.ImageField(upload_to='Campaign/')

    region = models.ForeignKey(Region, on_delete=models.PROTECT)
    posted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Campaigns"

class BeforeAfterImage(models.Model):
    before_image = models.ImageField(upload_to='BeforeAfter/')
    after_image = models.ImageField(upload_to='BeforeAfter/')

    def __str__(self):
        return "Before and After Images ** DON'T DELETE THIS ** You can edit the images only"

    class Meta:
        verbose_name_plural = "Before & After"
        
class SuccessStories(models.Model):
    description = models.TextField()
    video_thumbnail_image = models.ImageField(upload_to='SuccessStories/')
    video = models.FileField(upload_to='SuccessStories/')

    def __str__(self):
        return "Success Stories ** DON'T DELETE THIS ** You may edit the data only"

    class Meta:
        verbose_name_plural = "Success Stories"
        verbose_name = "Success Story"
        
class AboutUs(models.Model):
    sub_title = models.TextField()
    description = models.TextField()

    image_1 = models.ImageField(upload_to='AboutUs/')
    image_2 = models.ImageField(upload_to='AboutUs/')
    image_3 = models.ImageField(upload_to='AboutUs/')

    value_1 = models.CharField(max_length=555)
    value_2 = models.CharField(max_length=555)
    value_3 = models.CharField(max_length=555)

    video_link_code = models.CharField(max_length=999)

    def __str__(self):
        return "About Us Section, You may edit the data only"

    class Meta:
        verbose_name_plural = "About Us"
        verbose_name = "About Us"

    def has_delete_permission(self, request, obj=None):
        return False

class SeasonalCampaigns(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='SeasonalCampaigns/')

    region = models.ForeignKey(Region, on_delete=models.PROTECT)
    posted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Seasonal Campaigns"
        
class CrisisWatch(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='CrisisWatch/')

    region = models.ForeignKey(Region, on_delete=models.PROTECT)
    posted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Crisis Watch"

class Hero(models.Model):
    title = models.CharField(max_length=555)
    center_image = models.ImageField(upload_to='Hero/')
    right_image = models.ImageField(upload_to='Hero/')

    service_title = models.CharField(max_length=255)
    service_image = models.FileField(upload_to='Hero/')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Hero Section"

class DonationForm(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='DonationForm/')

    hidden_message = models.CharField(max_length=999)
    # region = models.ForeignKey(Region, on_delete=models.PROTECT)
    type = models.CharField(max_length=255)

    raised = models.IntegerField()
    goal = models.IntegerField()

    fundraiseup_code = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class Program(models.Model):
    title = models.CharField(max_length=555)
    description = models.TextField()

    image = models.ImageField(upload_to='Program/', null=True, blank=True)
    video_youtube_link = models.CharField(max_length=999, null=True, blank=True)

    def __str__(self):
        return self.title

class RahmaAcademyProgramsOffered(models.Model):
    title = models.CharField(max_length=555)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "Rahma Academy Programs Offered"

class MentalHealthProgramsOffered(models.Model):
    title = models.CharField(max_length=555)
    description = models.TextField()

    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "Mental Health Programs Offered"