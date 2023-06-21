# Generated by Django 3.2.12 on 2023-05-05 21:26

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_site_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='quality',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=5, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)]),
        ),
    ]
