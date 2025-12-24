import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Plus, Minus } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

interface MenuPageProps {
  onBack: () => void;
  onCheckout?: (cart: { [key: number]: number }) => void;
}

export function MenuPage({ onBack, onCheckout }: MenuPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const menuItems: MenuItem[] = [
    // Coffee & Beverages
    {
      id: 1,
      name: 'Espresso',
      category: 'Coffee',
      price: 3.50,
      description: 'Rich and bold shot of premium espresso',
      image: '☕'
    },
    {
      id: 2,
      name: 'Cappuccino',
      category: 'Coffee',
      price: 4.50,
      description: 'Espresso with steamed milk and foam',
      image: '☕'
    },
    {
      id: 3,
      name: 'Caffe Latte',
      category: 'Coffee',
      price: 4.75,
      description: 'Smooth espresso with velvety steamed milk',
      image: '☕'
    },
    {
      id: 4,
      name: 'Cold Brew',
      category: 'Coffee',
      price: 5.00,
      description: 'Slow-steeped coffee served over ice',
      image: '🧊'
    },
    {
      id: 5,
      name: 'Matcha Latte',
      category: 'Beverages',
      price: 5.50,
      description: 'Premium Japanese matcha with steamed milk',
      image: '🍵'
    },
    {
      id: 6,
      name: 'Fresh Orange Juice',
      category: 'Beverages',
      price: 4.00,
      description: 'Freshly squeezed orange juice',
      image: '🍊'
    },
    // Main Dishes
    {
      id: 7,
      name: 'Truffle Pasta',
      category: 'Main Dishes',
      price: 18.50,
      description: 'Creamy pasta with black truffle and parmesan',
      image: '🍝'
    },
    {
      id: 8,
      name: 'Grilled Ribeye Steak',
      category: 'Main Dishes',
      price: 28.00,
      description: 'Premium ribeye with herbs and garlic butter',
      image: '🥩'
    },
    {
      id: 9,
      name: 'Pan-Seared Salmon',
      category: 'Main Dishes',
      price: 22.00,
      description: 'Atlantic salmon with lemon butter sauce',
      image: '🐟'
    },
    {
      id: 10,
      name: 'Caesar Salad',
      category: 'Main Dishes',
      price: 12.00,
      description: 'Crisp romaine with classic caesar dressing',
      image: '🥗'
    },
    {
      id: 11,
      name: 'Chicken Burger',
      category: 'Main Dishes',
      price: 14.50,
      description: 'Grilled chicken with lettuce and special sauce',
      image: '🍔'
    },
    {
      id: 12,
      name: 'Vegetable Risotto',
      category: 'Main Dishes',
      price: 16.00,
      description: 'Creamy arborio rice with seasonal vegetables',
      image: '🍚'
    },
    // Desserts
    {
      id: 13,
      name: 'Classic Tiramisu',
      category: 'Desserts',
      price: 7.50,
      description: 'Italian coffee-flavored dessert',
      image: '🍰'
    },
    {
      id: 14,
      name: 'New York Cheesecake',
      category: 'Desserts',
      price: 8.00,
      description: 'Rich and creamy cheesecake with berry compote',
      image: '🍰'
    },
    {
      id: 15,
      name: 'Chocolate Lava Cake',
      category: 'Desserts',
      price: 8.50,
      description: 'Warm chocolate cake with molten center',
      image: '🍫'
    },
    {
      id: 16,
      name: 'Croissant',
      category: 'Desserts',
      price: 4.50,
      description: 'Buttery French pastry',
      image: '🥐'
    },
    {
      id: 17,
      name: 'Gelato Selection',
      category: 'Desserts',
      price: 6.00,
      description: 'Choice of three artisan gelato flavors',
      image: '🍨'
    }
  ];

  const categories = ['All', 'Coffee', 'Beverages', 'Main Dishes', 'Desserts'];

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = menuItems.find(item => item.id === Number(id));
    return sum + (item?.price || 0) * qty;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-[var(--color-border)] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-[var(--color-accent)] hover:opacity-70 transition-opacity"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            
            {totalItems > 0 && (
              <div className="flex items-center gap-4 px-4 py-2 bg-[var(--color-accent)] text-white">
                <ShoppingCart className="w-5 h-5" />
                <span>{totalItems} items</span>
                <span className="ml-2">${totalPrice.toFixed(2)}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="mb-2">Our Menu</h1>
          <p className="text-gray-600">Browse our complete selection of food and beverages</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 border-2 transition-colors ${
                selectedCategory === category
                  ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
                  : 'border-[var(--color-border)] text-gray-700 hover:border-[var(--color-accent)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="bg-white border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-accent)] transition-colors"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-100 flex items-center justify-center border-b border-[var(--color-border)]">
                <span className="text-6xl">{item.image}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl">{item.name}</h3>
                  <span className="text-[var(--color-accent)]">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500 mb-1">{item.category}</p>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>

                {/* Add to Cart Controls */}
                <div className="flex items-center gap-3">
                  {cart[item.id] ? (
                    <div className="flex items-center gap-3 w-full">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-10 h-10 border-2 border-[var(--color-accent)] text-[var(--color-accent)] flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="flex-1 text-center">{cart[item.id]}</span>
                      <button
                        onClick={() => addToCart(item.id)}
                        className="w-10 h-10 border-2 border-[var(--color-accent)] text-[var(--color-accent)] flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(item.id)}
                      className="w-full px-4 py-2 bg-[var(--color-accent)] text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Checkout Button */}
        {totalItems > 0 && (
          <div className="fixed bottom-6 right-6 z-50">
            <button 
              onClick={() => onCheckout?.(cart)}
              className="px-8 py-4 bg-[var(--color-accent)] text-white shadow-lg hover:opacity-90 transition-opacity flex items-center gap-3"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Checkout ({totalItems}) - ${totalPrice.toFixed(2)}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}