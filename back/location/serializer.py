from rest_framework import serializers
from core.models import Category, Site


class CategorySerializer(serializers.ModelSerializer):
    """ Model serializer from Category model """
    image = serializers.ImageField(required=False)

    class Meta:
        model = Category
        fields = ('id', 'name', 'image')
        read_only_fields = ('id',)

    def create(self, validated_data):
        image = validated_data.pop('image')
        instance = super().create(validated_data)
        instance.image.save(image.name, image)
        return instance


class SiteSerializer(serializers.ModelSerializer):
    """ Model serializer from site model """
    image = serializers.ImageField(required=False)

    class Meta:
        model = Site
        fields = ('id', 'name', 'url', 'location', 'quality', 'category', 'image', 'price')
        read_only_fields = ('id',)

    def create(self, validated_data):
        image = validated_data.pop('image')
        instance = super().create(validated_data)
        instance.image.save(image.name, image)
        return instance


class SiteListSerializer(SiteSerializer):
    class Meta(SiteSerializer.Meta):
        depth = 1

