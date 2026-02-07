
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, PORTFOLIO } from '../constants';

const HomePage: React.FC = () => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1920";
  };

  return (
    <div className="space-y-0 pb-0">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Event Decor" 
            className="w-full h-full object-cover brightness-[0.4] scale-105 animate-slow-zoom"
            onError={handleImgError}
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl">
          <div className="mb-8 inline-block py-2 px-8 border border-[#D4AF37] rounded-full text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-black bg-black/40 backdrop-blur-xl animate-fade-in shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            Hull, UK — Accra, Ghana
          </div>
          <h1 className="text-6xl md:text-9xl font-serif text-white mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] font-bold leading-none animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Bespoke <span className="text-[#D4AF37] italic">Elegance</span>.
          </h1>
          <p className="text-xl md:text-3xl text-zinc-200 mb-12 font-light max-w-4xl mx-auto leading-relaxed animate-fade-in drop-shadow-md" style={{ animationDelay: '0.4s' }}>
            Professional eventx planning, luxury decoration, and elite protocol services delivered with precision across continents.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/contact" className="px-12 py-5 bg-[#D4AF37] text-black font-black rounded-sm hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl uppercase text-xs tracking-widest">
              Plan Your Eventx
            </Link>
            <Link to="/portfolio" className="px-12 py-5 border border-white/30 text-white font-bold rounded-sm hover:bg-white hover:text-black transition-all backdrop-blur-sm uppercase text-xs tracking-widest">
              Our Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#F4E4BC] rounded-full -z-10 opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1200" 
              className="rounded-sm shadow-2xl relative z-10 w-full h-[500px] object-cover" 
              alt="Traditional Celebration" 
              onError={handleImgError}
            />
            <div className="absolute -bottom-10 -right-10 bg-black text-[#D4AF37] p-10 hidden md:block z-20 shadow-2xl border-t-4 border-[#D4AF37]">
              <p className="text-5xl font-serif font-bold mb-2">15+</p>
              <p className="text-[10px] uppercase tracking-widest font-black text-zinc-400">Years of Luxury Experience</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">Mastering the Art of <br/><span className="italic text-[#D4AF37]">Presence</span>.</h2>
            <p className="text-xl text-zinc-600 leading-relaxed font-light">
              ODREG DECO & EVENTX SERVICES is more than a planning firm. We bridge cultural nuances with operational excellence from Kingston upon Hull to Accra.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="space-y-4">
                <div className="text-3xl">🇬🇧</div>
                <h4 className="font-bold text-black uppercase tracking-widest text-sm">UK Operations</h4>
                <p className="text-sm text-zinc-500">Based in Hull, managing corporate galas and destination consulting.</p>
              </div>
              <div className="space-y-4">
                <div className="text-3xl">🇬🇭</div>
                <h4 className="font-bold text-black uppercase tracking-widest text-sm">Ghana Operations</h4>
                <p className="text-sm text-zinc-500">Full-scale decoration and protocol in Accra & Kumasi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-4 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <p className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Unrivaled Expertise</p>
            <h2 className="text-5xl md:text-7xl font-serif mb-8">What We Perfect</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-[#0a0a0a] p-16 group hover:bg-zinc-900 transition-all duration-500">
                <div className="text-6xl mb-12 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-3xl font-serif font-bold mb-6 text-white group-hover:text-[#D4AF37] transition-colors">{service.title}</h3>
                <p className="text-zinc-500 mb-10 text-sm leading-relaxed">{service.description}</p>
                <Link to={`/services/${service.id}`} className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37] hover:text-white transition-colors">
                  Explore Service <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
