# Generated by Django 4.2.2 on 2023-09-18 12:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='academic_year',
            field=models.CharField(max_length=60),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='confirm_password',
            field=models.CharField(max_length=60),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='password',
            field=models.CharField(max_length=60),
        ),
    ]
