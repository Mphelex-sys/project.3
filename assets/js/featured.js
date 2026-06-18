// featured.js
// Dynamically loads "Today's Specials" cards on index.html using JavaScript DOM manipulation

document.addEventListener('DOMContentLoaded', function () {
  const products = [
    {
      name: 'Artisan Loaf',
      category: 'Bread',
      price: 'R35,00',
      icon: 'fa-bread-slice',
      description: 'Crusty outside, soft inside. Baked fresh this morning.'
    },
    {
      name: 'Wedding Cake',
      category: 'Cake',
      price: 'R450,00',
      icon: 'fa-cake-candles',
      description: 'Elegant multi-tier cake, fully customisable for your day.'
    },
    {
      name: 'Blueberry Muffin',
      category: 'Muffin',
      price: 'R25,00',
      icon: 'fa-mug-hot',
      description: 'Packed with real blueberries, soft and fluffy.'
    },
    {
      name: 'Butter Cookies',
      category: 'Cookies',
      price: 'R15,00',
      icon: 'fa-cookie',
      description: 'Classic crunchy cookies, perfect with tea or coffee.'
    }
  ];

  const container = document.getElementById('featured-products');
  if (!container) return;

  products.forEach(function (product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML =
      '<div class="product-card-icon"><i class="fa-solid ' + product.icon + '"></i></div>' +
      '<div class="product-card-body">' +
        '<span class="product-category">' + product.category + '</span>' +
        '<h3>' + product.name + '</h3>' +
        '<p>' + product.description + '</p>' +
        '<strong class="product-price">' + product.price + '</strong>' +
      '</div>';
    container.appendChild(card);
  });
});

