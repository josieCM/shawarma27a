import React from 'react';
import { Instagram, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <span className="text-2xl font-black tracking-tighter mb-6 block">
              SHAWARMA <span className="text-primary">27</span>
            </span>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              The ultimate shawarma destination in Dar es Salaam. Quality, taste, and speed in every wrap.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/shawarma_27" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-widest text-primary">Contact</h4>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>Mwenge, Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span>0756 920 001</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={20} className="text-primary shrink-0" />
                <span>0702 992 001</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-widest text-primary">Hours</h4>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-primary shrink-0" />
                <div>
                  <p className="text-white font-bold">Daily</p>
                  <p className="text-sm">1:00 PM – 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-xs font-bold uppercase tracking-widest">
          <p>© 2026 Shawarma 27. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;