import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../data/menuData';
import { useNavigate } from 'react-router-dom';

interface Props {
  item: MenuItem | null;
  onClose: () => void;
}

const MenuLightbox: React.FC<Props> = ({ item, onClose }) => {
  const navigate = useNavigate();
  if (!item) return null;

  const handleOrderNow = () => {
    const message = encodeURIComponent(`Hi, I want to order ${item.name}`);
    window.open(`https://wa.me/255756920001?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-cream rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 h-64 md:h-auto">
              <img 
                src={item.image || 'https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=800&auto=format&fit=crop'} 
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col">
              <div className="mb-6">
                {item.tag && (
                  <span className="inline-block bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                    {item.tag}
                  </span>
                )}
                <h2 className="text-3xl font-black text-secondary mb-2 leading-tight">{item.name}</h2>
                <p className="text-primary font-black text-2xl">{item.price}</p>
              </div>
              
              <p className="text-zinc-500 font-medium mb-8 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-auto flex flex-col gap-3">
                <button 
                  onClick={handleOrderNow}
                  className="w-full py-4 neu-button-primary flex items-center justify-center gap-3 font-bold"
                >
                  <MessageCircle size={20} />
                  Order on WhatsApp
                </button>
                <button 
                  onClick={() => navigate('/order')}
                  className="w-full py-4 neu-button flex items-center justify-center gap-3 font-bold text-secondary"
                >
                  <ShoppingBag size={20} className="text-primary" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default MenuLightbox;