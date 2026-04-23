import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-cream">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="inline-block bg-orange-100 text-primary text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Best Shawarma in Dar es Salaam
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-secondary mb-6 leading-[1.1] tracking-tight">
            Taste the <span className="text-primary">Perfection</span> in Every Bite.
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl font-medium mb-10 max-w-lg leading-relaxed">
            Freshly grilled, perfectly spiced, and served with love. Experience the legendary Shawarma 27 taste today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/menu"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 neu-button-primary text-lg font-bold"
            >
              View Our Menu
              <ArrowRight size={20} />
            </Link>
            <a 
              href="https://wa.me/255756920001?text=Hi, I want to order shawarma"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 neu-button text-lg font-bold text-secondary"
            >
              <MessageCircle size={24} className="text-primary" />
              Order on WhatsApp
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-secondary">
              <span className="text-primary">1,000+</span> Happy Customers
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-neu-lg rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=800&auto=format&fit=crop" 
              alt="Delicious Shawarma" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingHero;