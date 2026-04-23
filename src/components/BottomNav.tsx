import React from 'react';
import { Home, UtensilsCrossed, ShoppingBag, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: UtensilsCrossed, label: 'Menu', path: '/menu' },
    { icon: ShoppingBag, label: 'Order', path: '/order' },
    { icon: MessageCircle, label: 'WhatsApp', path: 'https://wa.me/255756920001', external: true },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-cream/80 backdrop-blur-xl border-t border-zinc-200 z-50 px-6 py-3 flex justify-between items-center">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        if (item.external) {
          return (
            <a 
              key={item.label}
              href={item.path}
              className="flex flex-col items-center gap-1 text-zinc-400"
            >
              <Icon size={20} />
              <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
            </a>
          );
        }

        return (
          <Link 
            key={item.label}
            to={item.path}
            className={`flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-primary' : 'text-zinc-400'}`}
          >
            <Icon size={20} className={isActive ? 'fill-primary/10' : ''} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;