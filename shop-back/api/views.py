from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Product, Category


def product_to_dict(product):
    return {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category': {
            'id': product.category.id,
            'name': product.category.name,
        }
    }


def category_to_dict(category):
    return {
        'id': category.id,
        'name': category.name,
    }


@require_http_methods(['GET'])
def products_list(request):
    products = Product.objects.select_related('category').all()
    data = [product_to_dict(p) for p in products]
    return JsonResponse(data, safe=False)


@require_http_methods(['GET'])
def product_detail(request, id):
    try:
        product = Product.objects.select_related('category').get(pk=id)
        return JsonResponse(product_to_dict(product))
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)


@require_http_methods(['GET'])
def categories_list(request):
    categories = Category.objects.all()
    data = [category_to_dict(c) for c in categories]
    return JsonResponse(data, safe=False)


@require_http_methods(['GET'])
def category_detail(request, id):
    try:
        category = Category.objects.get(pk=id)
        return JsonResponse(category_to_dict(category))
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)


@require_http_methods(['GET'])
def category_products(request, id):
    try:
        category = Category.objects.get(pk=id)
        products = Product.objects.select_related('category').filter(category=category)
        data = [product_to_dict(p) for p in products]
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)