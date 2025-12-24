import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Smartphone, Building2, CheckCircle } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

interface CheckoutPageProps {
  cart: { [key: number]: number };
  menuItems: MenuItem[];
  onBack: () => void;
  onComplete: () => void;
}

export function CheckoutPage({ cart, menuItems, onBack, onComplete }: CheckoutPageProps) {
  const [selectedPayment, setSelectedPayment] = useState<string>('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const paymentMethods = [
    {
      id: 'bca',
      name: 'BCA',
      type: 'Bank Transfer',
      icon: '🏦',
      category: 'bank'
    },
    {
      id: 'bri',
      name: 'BRI',
      type: 'Bank Transfer',
      icon: '🏦',
      category: 'bank'
    },
    {
      id: 'bni',
      name: 'BNI',
      type: 'Bank Transfer',
      icon: '🏦',
      category: 'bank'
    },
    {
      id: 'bsi',
      name: 'BSI',
      type: 'Bank Transfer',
      icon: '🏦',
      category: 'bank'
    },
    {
      id: 'dana',
      name: 'DANA',
      type: 'E-Wallet',
      icon: '💳',
      category: 'ewallet'
    },
    {
      id: 'gopay',
      name: 'GoPay',
      type: 'E-Wallet',
      icon: '💳',
      category: 'ewallet'
    },
    {
      id: 'linkaja',
      name: 'LinkAja',
      type: 'E-Wallet',
      icon: '💳',
      category: 'ewallet'
    }
  ];

  const cartItems = Object.entries(cart).map(([id, quantity]) => {
    const item = menuItems.find(item => item.id === Number(id));
    return { ...item!, quantity };
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const serviceFee = 2.00;
  const total = subtotal + tax + serviceFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPayment || !customerInfo.name || !customerInfo.phone) {
      alert('Mohon lengkapi data dan pilih metode pembayaran');
      return;
    }
    setShowSuccess(true);
    setTimeout(() => {
      onComplete();
    }, 3000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-12 border border-[var(--color-border)] max-w-md">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="mb-4">Pesanan Berhasil!</h2>
          <p className="text-gray-600 mb-6">
            Terima kasih atas pesanan Anda. Kami akan segera memproses pesanan Anda.
          </p>
          <div className="bg-gray-50 p-4 mb-6 border border-[var(--color-border)]">
            <p className="text-sm text-gray-600 mb-2">Total Pembayaran</p>
            <p className="text-[var(--color-accent)] text-2xl">Rp {(total * 15000).toLocaleString('id-ID')}</p>
            <p className="text-sm text-gray-500 mt-2">Metode: {paymentMethods.find(p => p.id === selectedPayment)?.name}</p>
          </div>
          <p className="text-sm text-gray-500">Mengarahkan kembali...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-[var(--color-border)] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[var(--color-accent)] hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Kembali ke Menu</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Information */}
            <div className="bg-white border border-[var(--color-border)] p-6">
              <h3 className="mb-6">Informasi Pemesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-600">Nama Lengkap *</label>
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-4 py-3 border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-accent)]"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-600">Nomor Telepon *</label>
                  <input
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-accent)]"
                    placeholder="Contoh: 08123456789"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-600">Email (Opsional)</label>
                  <input
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    className="w-full px-4 py-3 border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-accent)]"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-600">Catatan Pesanan (Opsional)</label>
                  <textarea
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                    className="w-full px-4 py-3 border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-accent)] resize-none"
                    rows={3}
                    placeholder="Contoh: Tidak pedas, tanpa bawang, dll"
                  />
                </div>
              </form>
            </div>

            {/* Payment Methods */}
            <div className="bg-white border border-[var(--color-border)] p-6">
              <h3 className="mb-6">Metode Pembayaran</h3>

              {/* Bank Transfer */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-[var(--color-accent)]" />
                  <h3 className="text-lg">Transfer Bank</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.filter(p => p.category === 'bank').map(method => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedPayment(method.id)}
                      className={`p-4 border-2 transition-all text-left ${
                        selectedPayment === method.id
                          ? 'border-[var(--color-accent)] bg-orange-50'
                          : 'border-[var(--color-border)] hover:border-[var(--color-accent)]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{method.icon}</span>
                        <div>
                          <p className="font-medium">{method.name}</p>
                          <p className="text-xs text-gray-500">{method.type}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* E-Wallet */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Smartphone className="w-5 h-5 text-[var(--color-accent)]" />
                  <h3 className="text-lg">E-Wallet</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.filter(p => p.category === 'ewallet').map(method => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedPayment(method.id)}
                      className={`p-4 border-2 transition-all text-left ${
                        selectedPayment === method.id
                          ? 'border-[var(--color-accent)] bg-orange-50'
                          : 'border-[var(--color-border)] hover:border-[var(--color-accent)]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{method.icon}</span>
                        <div>
                          <p className="font-medium">{method.name}</p>
                          <p className="text-xs text-gray-500">{method.type}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Instructions */}
              {selectedPayment && (
                <div className="mt-6 p-4 bg-gray-50 border border-[var(--color-border)]">
                  <p className="text-sm mb-2">Instruksi Pembayaran:</p>
                  <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                    <li>Klik tombol "Konfirmasi Pesanan" di bawah</li>
                    <li>Anda akan menerima nomor virtual account/kode pembayaran</li>
                    <li>Lakukan pembayaran sesuai nominal yang tertera</li>
                    <li>Pesanan akan diproses setelah pembayaran dikonfirmasi</li>
                  </ol>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-[var(--color-border)] p-6 sticky top-24">
              <h3 className="mb-6">Ringkasan Pesanan</h3>

              {/* Cart Items */}
              <div className="space-y-4 mb-6 pb-6 border-b border-[var(--color-border)]">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-sm mb-1">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.quantity} x ${item.price.toFixed(2)}</p>
                    </div>
                    <p className="text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b border-[var(--color-border)]">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Pajak (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Biaya Layanan</span>
                  <span>${serviceFee.toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between mb-6">
                <span className="text-lg">Total</span>
                <div className="text-right">
                  <p className="text-[var(--color-accent)] text-xl">${total.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">≈ Rp {(total * 15000).toLocaleString('id-ID')}</p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={!selectedPayment || !customerInfo.name || !customerInfo.phone}
                className="w-full py-3 bg-[var(--color-accent)] text-white hover:opacity-90 transition-opacity disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Konfirmasi Pesanan
              </button>

              <p className="text-xs text-center text-gray-500 mt-4">
                Dengan melanjutkan, Anda menyetujui syarat dan ketentuan kami
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
