# Generated by Django 3.1.4 on 2022-03-28 10:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_beforeafterimage_campaign'),
    ]

    operations = [
        migrations.CreateModel(
            name='AboutUs',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sub_title', models.CharField(max_length=555)),
                ('description', models.TextField()),
                ('image_1', models.ImageField(upload_to='AboutUs/')),
                ('image_2', models.ImageField(upload_to='AboutUs/')),
                ('image_3', models.ImageField(upload_to='AboutUs/')),
                ('value_1', models.CharField(max_length=555)),
                ('value_2', models.CharField(max_length=555)),
                ('value_3', models.CharField(max_length=555)),
                ('video_link', models.CharField(max_length=999)),
            ],
            options={
                'verbose_name': 'About Us',
                'verbose_name_plural': 'About Us',
            },
        ),
        migrations.CreateModel(
            name='Continent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Hero',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=555)),
                ('center_image', models.ImageField(upload_to='Hero/')),
                ('right_image', models.ImageField(upload_to='Hero/')),
                ('service_title', models.CharField(max_length=255)),
                ('service_image', models.ImageField(upload_to='Hero/')),
            ],
            options={
                'verbose_name_plural': 'Hero Section',
            },
        ),
        migrations.CreateModel(
            name='SuccessStories',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField()),
                ('video_thumbnail_image', models.ImageField(upload_to='SuccessStories/')),
                ('video', models.FileField(upload_to='SuccessStories/')),
            ],
            options={
                'verbose_name': 'Success Story',
                'verbose_name_plural': 'Success Stories',
            },
        ),
        migrations.RemoveField(
            model_name='program',
            name='program_type',
        ),
        migrations.AddField(
            model_name='program',
            name='main_video_url',
            field=models.CharField(blank=True, max_length=555, null=True),
        ),
        migrations.CreateModel(
            name='WaterWellProject',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=255)),
                ('life_span', models.CharField(max_length=255)),
                ('cost', models.IntegerField()),
                ('beneficiaries', models.IntegerField()),
                ('continent', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.continent')),
                ('country', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.region')),
            ],
        ),
        migrations.CreateModel(
            name='SeasonalCampaigns',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='SeasonalCampaigns/')),
                ('posted_at', models.DateTimeField(auto_now_add=True)),
                ('region', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.region')),
            ],
            options={
                'verbose_name_plural': 'Seasonal Campaigns',
            },
        ),
        migrations.CreateModel(
            name='CrisisWatch',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='CrisisWatch/')),
                ('posted_at', models.DateTimeField(auto_now_add=True)),
                ('region', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.region')),
            ],
            options={
                'verbose_name_plural': 'Crisis Watch',
            },
        ),
    ]