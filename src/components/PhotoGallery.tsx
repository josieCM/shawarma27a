import React from 'react';
import { motion } from 'framer-motion';

const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=800', title: 'Fresh Preparation' },
  { url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800', title: 'Signature Shawarma' },
  { url: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=800', title: 'Happy Customers' },
  { url: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800', title: 'Mwenge Location' },
  { url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800', title: 'Lunch Specials' },
  { url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800', title: 'Grill Masters' },
];

const PhotoGallery = () => {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-black tracking-widest uppercase text-xs mb-4 block">Our Moments</span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary">Life at <span className="text-primary">Shawarma 27</span></h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group rounded-[2rem] overflow-hidden shadow-neu-md break-inside-avoid"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-white font-black text-xl">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;