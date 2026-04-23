import React from 'react';
import { Instagram, PartyPopper, Briefcase, Heart } from 'lucide-react';

const CateringSection = () => {
  const services = [
    { icon: <PartyPopper size={32} />, title: "Parties", desc: "Birthday, graduation, or just a get-together." },
    { icon: <Briefcase size={32} />, title: "Corporate", desc: "Office lunches and company events." },
    { icon: <Heart size={32} />, title: "Weddings", desc: "Late-night snacks your guests will love." },
  ];

  return (
    <section id="catering" className="py-24 bg-cream scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-secondary rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative shadow-neu-lg">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop" 
              alt="Catering" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 lg:w-3/5">
            <span className="text-primary font-black tracking-widest uppercase text-xs mb-4 block">Events & Catering</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Make Your Event <span className="text-primary">Unforgettable</span></h2>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed font-medium">
              Bring the Shawarma 27 experience to your next event. Our professional catering team handles everything from setup to serving.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              {services.map((s, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="text-primary">{s.icon}</div>
                  <h4 className="font-black text-xl">{s.title}</h4>
                  <p className="text-zinc-500 text-sm font-medium">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://instagram.com/shawarma27_events" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-secondary px-8 py-4 rounded-full font-black flex items-center gap-2 hover:bg-primary hover:text-white transition-all"
              >
                <Instagram size={20} />
                @shawarma27_events
              </a>
              <a 
                href="https://wa.me/255756920001?text=I'm interested in catering services" 
                className="border border-white/20 text-white px-8 py-4 rounded-full font-black hover:bg-white/10 transition-all"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringSection;