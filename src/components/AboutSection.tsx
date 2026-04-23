import React from 'react';
import { CheckCircle2, MapPin, Clock, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    { icon: <CheckCircle2 className="text-primary" />, text: "Fresh Daily Ingredients" },
    { icon: <Clock className="text-primary" />, text: "Fast & Friendly Service" },
    { icon: <MapPin className="text-primary" />, text: "Convenient Mwenge Location" },
    { icon: <Users className="text-primary" />, text: "Trusted by 1000+ Customers" },
  ];

  return (
    <section id="about" className="py-24 bg-cream overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-neu-lg">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop" 
                alt="Shawarma Preparation" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-8 rounded-[2rem] shadow-xl z-20 hidden md:block">
              <p className="text-4xl font-black mb-1 text-primary">10+</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-70">Years of Spice<br/>Perfection</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6 leading-tight">
              The Heart of Shawarma in <span className="text-primary">Dar es Salaam</span>
            </h2>
            <p className="text-zinc-500 text-lg mb-8 leading-relaxed font-medium">
              Located in the bustling heart of Mwenge, Shawarma 27 has become a local landmark for food lovers. We don't just make shawarma; we craft an experience using the finest local meats and traditional techniques.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 neu-card p-4 rounded-2xl">
                  {f.icon}
                  <span className="font-bold text-secondary text-sm">{f.text}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://wa.me/255756920001"
              className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors shadow-lg"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;