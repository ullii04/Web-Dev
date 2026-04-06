from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action

from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def destroy(self, request, *args, **kwargs):
        product = self.get_object()

        if product.is_active:
            product.delete()
            return Response(
                {"message": "Product deleted successfully"},
                status=status.HTTP_204_NO_CONTENT
            )
        else:
            return Response(
                {"error": "This product is not active"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
