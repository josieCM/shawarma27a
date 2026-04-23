import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ShoppingBag, Plus, Minus, Trash2, MessageCircle, MapPin, Truck, Store } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BottomNav from '../components/BottomNav';
import { MENU_DATA, MenuItem } from '../data/menuData';

interface CartItem extends MenuItem {
  quantity: number;
}

export default function Order() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { register, handleSubmit, watch } = useForm();
  const orderType = watch('orderType', 'pickup');

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + (item.numericPrice * item.quantity), 0);

  const onSubmit = (data: any) => {
    if (cart.length === 0) return alert('Your cart is empty!');
    
    const itemsList = cart.map(i => `- ${i.name} x${i.quantity} (${(i.numericPrice * i.quantity).toLocaleString()}/=)`).join('\n');
    const message = encodeURIComponent(
      `*New Order Request*\n\n` +
      `*Items:*\n${itemsList}\n\n` +
      `*Total:* ${total.toLocaleString()}/=\n` +
      `*Type:* ${data.orderType.toUpperCase()}\n` +
      (data.orderType === 'delivery' ? `*Address:* ${data.address}\n` : '') +
      `*Customer:* ${data.name}\n` +
      `*Phone:* ${data.phone}`
    );
    window.open(`https://wa.me/255756920001?text=${message}`, '_blank');
  };

  return (
    <div className="bg-cream min-h-screen pb-20 md:pb-0">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
            <ShoppingBag size={24} />
          </div>
          <h1 className="text-4xl font-black text-secondary">Place Your <span className="text-primary">Order</span></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Menu Selection */}
          <div className="lg:col-span-7 space-y-12">
            {MENU_DATA.map((category) => (
              <section key={category.id}>
                <h2 className="text-2xl font-black text-secondary mb-6 flex items-center gap-3">
                  {category.title}
                  <div className="h-px flex-grow bg-zinc-200" />
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {category.items.map((item) => (
                    <div key={item.id} className="neu-card p-4 flex items-center gap-4 group">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                        <img src={item.image} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-black text-secondary leading-tight">{item.name}</h3>
                        <p className="text-primary font-bold text-sm">{item.price}</p>
                      </div>
                      <button 
                        onClick={() => addToCart(item)}
                        className="p-3 neu-button text-primary hover:bg-primary hover:text-white transition-all"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Cart & Checkout */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-6">
              <div className="neu-card p-8 bg-white">
                <h3 className="text-xl font-black text-secondary mb-6 flex items-center justify-between">
                  Your Cart
                  <span className="text-sm bg-zinc-100 px-3 py-1 rounded-full text-zinc-500">{cart.length} items</span>
                </h3>

                {cart.length === 0 ? (
                  <div className="py-12 text-center">
                    <ShoppingBag size={48} className="mx-auto text-zinc-200 mb-4" />
                    <p className="text-zinc-400 font-bold">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4 mb-8 max-h-[400px] overflow-y-auto no-scrollbar">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 pb-4 border-b border-zinc-100">
                        <div className="flex-grow">
                          <h4 className="font-bold text-secondary text-sm">{item.name}</h4>
                          <p className="text-primary font-bold text-xs">{(item.numericPrice * item.quantity).toLocaleString()}/=</p>
                        </div>
                        <div className="flex items-center gap-3 bg-zinc-50 rounded-xl p-1">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-primary"><Minus size={14} /></button>
                          <span className="text-xs font-black w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-primary"><Plus size={14} /></button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-zinc-300 hover:text-red-500"><Trash2 size={18} /></button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-6 border-t border-zinc-100 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500 font-bold">Subtotal</span>
                    <span className="text-secondary font-black text-xl">{total.toLocaleString()}/=</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="neu-card p-8 bg-white space-y-6">
                <div className="flex gap-4 p-1 bg-zinc-100 rounded-2xl">
                  <label className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl cursor-pointer transition-all font-bold text-sm ${orderType === 'pickup' ? 'bg-white shadow-sm text-primary' : 'text-zinc-500'}`}>
                    <input type="radio" value="pickup" {...register('orderType')} className="hidden" />
                    <Store size={18} /> Pickup
                  </label>
                  <label className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl cursor-pointer transition-all font-bold text-sm ${orderType === 'delivery' ? 'bg-white shadow-sm text-primary' : 'text-zinc-500'}`}>
                    <input type="radio" value="delivery" {...register('orderType')} className="hidden" />
                    <Truck size={18} /> Delivery
                  </label>
                </div>

                <div className="space-y-4">
                  <input {...register('name', { required: true })} placeholder="Your Name" className="w-full p-4 bg-zinc-50 rounded-xl border-none focus:ring-2 focus:ring-primary outline-none font-bold text-sm" />
                  <input {...register('phone', { required: true })} placeholder="Phone Number" className="w-full p-4 bg-zinc-50 rounded-xl border-none focus:ring-2 focus:ring-primary outline-none font-bold text-sm" />
                  {orderType === 'delivery' && (
                    <textarea {...register('address', { required: true })} placeholder="Delivery Address" className="w-full p-4 bg-zinc-50 rounded-xl border-none focus:ring-2 focus:ring-primary outline-none font-bold text-sm" rows={3}></textarea>
                  )}
                </div>

                <button type="submit" className="w-full py-5 neu-button-primary font-black text-lg flex items-center justify-center gap-3">
                  <MessageCircle size={24} />
                  Confirm Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}