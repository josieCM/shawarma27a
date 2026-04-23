import React from 'react';
import Navbar from '../components/Navbar';
import MenuHero from '../components/MenuHero';
import MenuSection from '../components/MenuSection';
import Footer from '../components/Footer';
import { MessageCircle } from 'lucide-react';

export default function Menu() {
  return (
    <div className="bg-cream min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <MenuHero />
        <MenuSection />
      </main>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/255756920001?text=Hi, I want to order shawarma"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-90"
      >
        <MessageCircle size={32} fill="white" />
      </a>

      {/* Sticky Mobile Order CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 z-40 md:hidden pointer-events-none">
        <a 
          href="https://wa.me/255756920001?text=Hi, I want to order shawarma"
          className="pointer-events-auto w-full bg-primary text-white py-4 rounded-2xl font-black text-center shadow-2xl flex items-center justify-center gap-3"
        >
          <MessageCircle size={24} />
          ORDER NOW ON WHATSAPP
        </a>
      </div>

      <Footer />
    </div>
  );
}