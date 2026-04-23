import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const MenuHero = () => {
  return (
    <section className="pt-32 pb-12 px-6 text-center bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-5xl font-black text-secondary mb-4 tracking-tight">
          Our <span className="text-primary">Menu</span>
        </h1>
        <p className="text-zinc-500 font-medium mb-8">
          Fresh, fast & delicious — order in seconds
        </p>
        
        <a 
          href="https://wa.me/255756920001?text=Hi, I want to order shawarma"
          className="inline-flex items-center gap-3 px-8 py-4 neu-button-primary text-lg font-bold"
        >
          <MessageCircle size={24} />
          Order via WhatsApp
        </a>
      </motion.div>
    </section>
  );
};

export default MenuHero;