import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { PartyPopper, Briefcase, Heart, Calendar, Users, MapPin, MessageCircle, Instagram } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BottomNav from '../components/BottomNav';

const PACKAGES = [
  {
    title: "Standard Event",
    price: "From 500,000/=",
    features: ["Live Shawarma Station", "2 Staff Members", "Up to 50 Guests", "3 Hours Service"],
    icon: PartyPopper
  },
  {
    title: "Corporate Gala",
    price: "From 1,200,000/=",
    features: ["Full Menu Selection", "4 Staff Members", "Up to 150 Guests", "Full Day Service"],
    icon: Briefcase
  },
  {
    title: "Wedding Special",
    price: "Custom Quote",
    features: ["Premium Setup", "Late Night Snacks", "Unlimited Guests", "Custom Branding"],
    icon: Heart
  }
];

export default function Catering() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const message = encodeURIComponent(
      `*New Catering Enquiry*\n\n` +
      `Event: ${data.eventType}\n` +
      `Date: ${data.date}\n` +
      `Guests: ${data.guests}\n` +
      `Location: ${data.location}\n` +
      `Budget: ${data.budget}\n` +
      `Notes: ${data.notes}`
    );
    window.open(`https://wa.me/255756920001?text=${message}`, '_blank');
  };

  return (
    <div className="bg-cream min-h-screen pb-20 md:pb-0">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 bg-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-black tracking-widest uppercase text-xs mb-4 block">Shawarma 27 Events</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Elevate Your <span className="text-primary">Celebration</span></h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-medium">Professional catering services for weddings, corporate events, and private parties across Dar es Salaam.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {PACKAGES.map((pkg, idx) => (
            <div key={idx} className="neu-card p-8 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <pkg.icon size={32} />
              </div>
              <h3 className="text-2xl font-black text-secondary mb-2">{pkg.title}</h3>
              <p className="text-primary font-bold mb-6">{pkg.price}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 neu-button font-bold text-secondary">Select Package</button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-black text-secondary mb-6">Request a <span className="text-primary">Quote</span></h2>
            <p className="text-zinc-500 mb-10 font-medium">Fill out the form below and our events team will get back to you within 24 hours via WhatsApp.</p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Event Type</label>
                  <select {...register('eventType')} className="w-full p-4 neu-card bg-white border-none focus:ring-2 focus:ring-primary outline-none font-bold">
                    <option>Wedding</option>
                    <option>Corporate</option>
                    <option>Birthday</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Event Date</label>
                  <input type="date" {...register('date')} className="w-full p-4 neu-card bg-white border-none focus:ring-2 focus:ring-primary outline-none font-bold" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Guest Count</label>
                  <input type="number" placeholder="e.g. 50" {...register('guests')} className="w-full p-4 neu-card bg-white border-none focus:ring-2 focus:ring-primary outline-none font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Location</label>
                  <input type="text" placeholder="e.g. Masaki" {...register('location')} className="w-full p-4 neu-card bg-white border-none focus:ring-2 focus:ring-primary outline-none font-bold" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Estimated Budget (TZS)</label>
                <input type="text" placeholder="e.g. 1,000,000" {...register('budget')} className="w-full p-4 neu-card bg-white border-none focus:ring-2 focus:ring-primary outline-none font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Additional Notes</label>
                <textarea rows={4} {...register('notes')} className="w-full p-4 neu-card bg-white border-none focus:ring-2 focus:ring-primary outline-none font-bold" placeholder="Tell us more about your event..."></textarea>
              </div>
              <button type="submit" className="w-full py-5 neu-button-primary font-black text-xl flex items-center justify-center gap-3">
                <MessageCircle size={24} />
                Send Enquiry via WhatsApp
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="neu-card p-8 bg-primary text-white">
              <h4 className="text-2xl font-black mb-4">Follow Our Events</h4>
              <p className="mb-6 opacity-80 font-medium">See our latest setups and happy clients on Instagram.</p>
              <a href="https://instagram.com/shawarma27_events" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-bold">
                <Instagram size={20} />
                @shawarma27_events
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=400" className="rounded-3xl shadow-lg" />
              <img src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=400" className="rounded-3xl shadow-lg mt-8" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
}