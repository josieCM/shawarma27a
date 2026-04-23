import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppCTA = () => {
  return (
    <section id="contact" className="py-24 bg-cream scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="neu-card bg-primary p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Hungry? Order Now!</h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-xl mx-auto font-medium">
              Skip the queue. Order via WhatsApp and pick up your hot shawarma in minutes or get it delivered.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/255756920001?text=Hi, I want to order shawarma"
                className="w-full md:w-auto bg-white text-primary px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-3"
              >
                <MessageCircle size={28} />
                0756 920 001
              </a>
              <a 
                href="https://wa.me/255702992001?text=Hi, I want to order shawarma"
                className="w-full md:w-auto bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-3"
              >
                <MessageCircle size={28} />
                0702 992 001
              </a>
            </div>
            
            <p className="mt-10 text-white/60 font-bold uppercase tracking-widest text-xs">
              "Hi, I want to order shawarma" — Send this to get started!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;