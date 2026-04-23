import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu as MenuIcon, X, User, ShoppingBag } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Order', path: '/order' },
    { name: 'Catering', path: '/catering' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 py-3 ${scrolled || mobileMenuOpen ? 'bg-cream/90 backdrop-blur-lg border-b border-zinc-200/50' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1">
          <span className="text-xl font-black tracking-tighter text-secondary">
            SHAWARMA <span className="text-primary">27</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className={`text-sm font-bold transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-secondary'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => navigate('/admin')}
            className="p-2.5 neu-button text-zinc-400 hover:text-primary transition-colors"
            title="Admin Portal"
          >
            <User size={20} />
          </button>
          <a 
            href="https://wa.me/255756920001?text=Hi, I want to order shawarma"
            className="px-4 py-2.5 neu-button-primary flex items-center gap-2"
          >
            <MessageCircle size={18} />
            <span className="text-xs font-bold hidden sm:inline">Order Now</span>
          </a>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 neu-button text-secondary md:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream border-b border-zinc-200 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-black text-secondary border-b border-zinc-100 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <a href="tel:0756920001" className="flex items-center gap-3 font-bold text-secondary">
              <Phone size={20} className="text-primary" />
              0756 920 001
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;