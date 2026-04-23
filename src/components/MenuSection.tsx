import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Star, ShoppingBag, Eye } from 'lucide-react';
import { MENU_DATA, MenuItem } from '../data/menuData';
import MenuLightbox from './MenuLightbox';
import { useNavigate } from 'react-router-dom';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pb-24">
      <MenuLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />

      {/* Category Navigation */}
      <div className="sticky top-[68px] z-40 bg-cream/90 backdrop-blur-md py-4 border-b border-zinc-200/50">
        <div className="max-w-5xl mx-auto px-4">
          <div 
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto no-scrollbar pb-2"
          >
            {MENU_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                    : 'neu-button text-zinc-500'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-12">
        {/* Featured Items */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Star className="text-primary fill-primary" size={20} />
            <h2 className="text-2xl font-black text-secondary">Best Sellers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MENU_DATA[0].items.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="neu-card overflow-hidden flex flex-col sm:flex-row h-full cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="sm:w-2/5 h-48 sm:h-auto relative">
                  <img 
                    src={item.image || 'https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=400&auto=format&fit=crop'} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Eye className="text-white" size={32} />
                  </div>
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-secondary mb-2 leading-tight">{item.name}</h3>
                    <p className="text-zinc-500 text-sm mb-4 line-clamp-3">{item.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-black text-xl">{item.price}</span>
                    <div className="flex gap-2">
                      <button 
                        onClick={(e) => { e.stopPropagation(); navigate('/order'); }}
                        className="p-3 neu-button text-secondary"
                      >
                        <ShoppingBag size={20} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); window.open(`https://wa.me/255756920001?text=Hi, I want to order ${item.name}`, '_blank'); }}
                        className="p-3 neu-button-primary"
                      >
                        <MessageCircle size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full Menu Sections */}
        {MENU_DATA.map((category) => (
          <section key={category.id} id={category.id} className="mb-16 scroll-mt-40">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-secondary">{category.title}</h2>
              <div className="h-px flex-grow mx-6 bg-zinc-200 hidden sm:block"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="neu-card p-6 flex flex-col justify-between cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="flex gap-4 mb-4">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                      <img src={item.image} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-black text-secondary leading-tight pr-4">{item.name}</h3>
                        {item.tag && (
                          <span className="bg-orange-100 text-primary text-[10px] font-bold uppercase px-2 py-1 rounded-md shrink-0">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-zinc-500 text-sm line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-primary font-black text-lg">{item.price}</span>
                    <div className="flex gap-2">
                      <button 
                        onClick={(e) => { e.stopPropagation(); navigate('/order'); }}
                        className="flex items-center gap-2 px-4 py-2 neu-button text-sm font-bold text-secondary"
                      >
                        <ShoppingBag size={16} className="text-primary" />
                        Add
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); window.open(`https://wa.me/255756920001?text=Hi, I want to order ${item.name}`, '_blank'); }}
                        className="flex items-center gap-2 px-4 py-2 neu-button-primary text-sm font-bold"
                      >
                        <MessageCircle size={16} />
                        Order
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;