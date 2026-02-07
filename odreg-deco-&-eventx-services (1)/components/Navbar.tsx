
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-lg py-4 border-b border-[#D4AF37]/50 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center font-bold text-black border-2 border-white group-hover:rotate-[360deg] transition-transform duration-1000 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                OD
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#D4AF37]">ODREG</span>
                <span className="text-[10px] text-white tracking-[0.4em] font-light -mt-1 hidden md:block uppercase text-nowrap">Deco & Eventx</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="relative text-white hover:text-[#D4AF37] px-1 py-1 text-xs uppercase tracking-[0.25em] font-bold transition-all group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <Link to="/consult" className="bg-[#D4AF37] text-black px-6 py-2 text-xs font-black uppercase tracking-widest hover:bg-white transition-colors">
                AI Advisor
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#D4AF37] hover:text-white focus:outline-none"
            >
              <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-16 6h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen bg-black border-b border-[#D4AF37]' : 'max-h-0'}`}>
        <div className="px-4 pt-4 pb-8 space-y-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block text-white text-xl font-serif tracking-widest hover:text-[#D4AF37] border-b border-zinc-900 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/consult"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-[#D4AF37] text-black text-center font-bold py-4 rounded-sm uppercase tracking-widest text-sm"
          >
            Start AI Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
