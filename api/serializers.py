from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import *

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    isActive = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin', "isActive"]

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_isActive(self, obj):
        return obj.is_active

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email

        return name

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin', 'token', "isActive"]

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class RegionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Region
        fields = "__all__"

class NewsSerializer(serializers.ModelSerializer):
    region = RegionSerializer(read_only=True)

    class Meta:
        model = News
        fields = "__all__"
    # def create(self, validated_data):  
    #     region = Region.objects.get(id=validated_data['region'])
    #     news = News.objects.create(**validated_data)
    #     news.region = region
    #     news.save()
    #     return news

class MemberSerializer(serializers.ModelSerializer):
    region = RegionSerializer(read_only=True)

    class Meta:
        model = Member
        fields = "__all__"

class ServiceSerializer(serializers.ModelSerializer):
    region = RegionSerializer(read_only=True)

    class Meta:
        model = Service
        fields = "__all__"

class ServiceVideoSerializer(serializers.ModelSerializer):
    service = ServiceSerializer(read_only=True)

    class Meta:
        model = ServiceVideo
        fields = "__all__"

class CareerSerializer(serializers.ModelSerializer):
    region = RegionSerializer(read_only=True)

    class Meta:
        model = Career
        fields = "__all__"

class CharityProgramSerializer(serializers.ModelSerializer):
    region = RegionSerializer(read_only=True)

    class Meta:
        model = CharityProgram
        fields = "__all__"

class HealthStatusSerializer(serializers.ModelSerializer):

    class Meta:
        model = HealthStatus
        fields = "__all__"

class OrphanSerializer(serializers.ModelSerializer):
    health_status = HealthStatusSerializer(read_only=True)
    region = RegionSerializer(read_only=True)
    
    class Meta:
        model = Orphan
        fields = "__all__"

class ContactFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactForm
        fields = "__all__"

# Frontend Data Serializers

class AwardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Award
        fields = "__all__"

class CountriesDataSerializer(serializers.ModelSerializer):
    region = RegionSerializer(read_only=True)

    class Meta:
        model = CountriesData
        fields = "__all__"

class SocialMediaPostsSerializer(serializers.ModelSerializer):
    region = RegionSerializer(read_only=True)

    class Meta:
        model = SocialMediaPosts
        fields = "__all__"

class CampaignSerializer(serializers.ModelSerializer):
    region = RegionSerializer(read_only=True)

    class Meta:
        model = Campaign
        fields = "__all__"

class BeforeAfterImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = BeforeAfterImage
        fields = "__all__"

class HeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hero
        fields = "__all__"

class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields = "__all__"

class SuccessStoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SuccessStories
        fields = "__all__"

class DonationFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonationForm
        fields = "__all__"

class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = "__all__"

class RahmaAcademyProgramsOfferedSerializer(serializers.ModelSerializer):
    class Meta:
        model = RahmaAcademyProgramsOffered
        fields = "__all__"

class MentalHealthProgramsOfferedSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentalHealthProgramsOffered
        fields = "__all__"

class OurWorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hero
        fields = ['id', 'service_title', 'service_image']