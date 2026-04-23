import React from 'react';
import Navbar from '../components/Navbar';
import LandingHero from '../components/LandingHero';
import AboutSection from '../components/AboutSection';
import CateringSection from '../components/CateringSection';
import PhotoGallery from '../components/PhotoGallery';
import WhatsAppCTA from '../components/WhatsAppCTA';
import Footer from '../components/Footer';
import BottomNav from '../components/BottomNav';
import { MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-cream min-h-screen selection:bg-primary/20 selection:text-primary pb-20 md:pb-0">
      <Navbar />
      <main>
        <LandingHero />
        <AboutSection />
        <PhotoGallery />
        <CateringSection />
        <WhatsAppCTA />
      </main>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/255756920001?text=Hi, I want to order shawarma"
        className="fixed bottom-24 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-90 md:bottom-6"
      >
        <MessageCircle size={32} fill="white" />
      </a>

      <Footer />
      <BottomNav />
    </div>
  );
}