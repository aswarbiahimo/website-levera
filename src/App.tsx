import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { MenuPage } from './components/MenuPage';
import { CheckoutPage } from './components/CheckoutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'menu' | 'checkout'>('home');
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [menuItems] = useState([
    { id: 1, name: 'Espresso', category: 'Coffee', price: 3.50, description: 'Rich and bold shot of premium espresso', image: '☕' },
    { id: 2, name: 'Cappuccino', category: 'Coffee', price: 4.50, description: 'Espresso with steamed milk and foam', image: '☕' },
    { id: 3, name: 'Caffe Latte', category: 'Coffee', price: 4.75, description: 'Smooth espresso with velvety steamed milk', image: '☕' },
    { id: 4, name: 'Cold Brew', category: 'Coffee', price: 5.00, description: 'Slow-steeped coffee served over ice', image: '🧊' },
    { id: 5, name: 'Matcha Latte', category: 'Beverages', price: 5.50, description: 'Premium Japanese matcha with steamed milk', image: '🍵' },
    { id: 6, name: 'Fresh Orange Juice', category: 'Beverages', price: 4.00, description: 'Freshly squeezed orange juice', image: '🍊' },
    { id: 7, name: 'Truffle Pasta', category: 'Main Dishes', price: 18.50, description: 'Creamy pasta with black truffle and parmesan', image: '🍝' },
    { id: 8, name: 'Grilled Ribeye Steak', category: 'Main Dishes', price: 28.00, description: 'Premium ribeye with herbs and garlic butter', image: '🥩' },
    { id: 9, name: 'Pan-Seared Salmon', category: 'Main Dishes', price: 22.00, description: 'Atlantic salmon with lemon butter sauce', image: '🐟' },
    { id: 10, name: 'Caesar Salad', category: 'Main Dishes', price: 12.00, description: 'Crisp romaine with classic caesar dressing', image: '🥗' },
    { id: 11, name: 'Chicken Burger', category: 'Main Dishes', price: 14.50, description: 'Grilled chicken with lettuce and special sauce', image: '🍔' },
    { id: 12, name: 'Vegetable Risotto', category: 'Main Dishes', price: 16.00, description: 'Creamy arborio rice with seasonal vegetables', image: '🍚' },
    { id: 13, name: 'Classic Tiramisu', category: 'Desserts', price: 7.50, description: 'Italian coffee-flavored dessert', image: '🍰' },
    { id: 14, name: 'New York Cheesecake', category: 'Desserts', price: 8.00, description: 'Rich and creamy cheesecake with berry compote', image: '🍰' },
    { id: 15, name: 'Chocolate Lava Cake', category: 'Desserts', price: 8.50, description: 'Warm chocolate cake with molten center', image: '🍫' },
    { id: 16, name: 'Croissant', category: 'Desserts', price: 4.50, description: 'Buttery French pastry', image: '🥐' },
    { id: 17, name: 'Gelato Selection', category: 'Desserts', price: 6.00, description: 'Choice of three artisan gelato flavors', image: '🍨' }
  ]);

  const handleCheckout = (cartData: { [key: number]: number }) => {
    setCart(cartData);
    setCurrentPage('checkout');
  };

  const handleCheckoutComplete = () => {
    setCart({});
    setCurrentPage('home');
  };

  if (currentPage === 'checkout') {
    return (
      <CheckoutPage 
        cart={cart} 
        menuItems={menuItems}
        onBack={() => setCurrentPage('menu')} 
        onComplete={handleCheckoutComplete}
      />
    );
  }

  if (currentPage === 'menu') {
    return (
      <MenuPage 
        onBack={() => setCurrentPage('home')} 
        onCheckout={handleCheckout}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <Header onViewMenu={() => setCurrentPage('menu')} />
      <main>
        <HeroSection onViewMenu={() => setCurrentPage('menu')} />
        <MenuSection onViewMenu={() => setCurrentPage('menu')} />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}