# Generated by Django 3.0.5 on 2020-07-26 03:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('DropBag', '0010_auto_20200725_2022'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='downvote',
        ),
        migrations.RemoveField(
            model_name='comment',
            name='upvote',
        ),
        migrations.RemoveField(
            model_name='post',
            name='downvote',
        ),
        migrations.RemoveField(
            model_name='post',
            name='upvote',
        ),
    ]
