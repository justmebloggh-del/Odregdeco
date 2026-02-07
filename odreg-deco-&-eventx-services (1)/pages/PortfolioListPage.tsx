
import React from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO } from '../constants';

const PortfolioListPage: React.FC = () => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200";
  };

  return (
    <div className="bg-zinc-950 pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-32 text-center text-white">
          <p className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Case Studies</p>
          <h1 className="text-7xl md:text-9xl font-serif font-bold mb-8 leading-none">Our <span className="italic text-[#D4AF37]">Legacy</span>.</h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">
            A curated showcase of events that define luxury, precision, and cultural mastery.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PORTFOLIO.map((item) => (
            <Link key={item.id} to={`/portfolio/${item.id}`} className="group relative block aspect-[4/5] overflow-hidden bg-zinc-900 shadow-2xl rounded-sm">
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.images[0]} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100" 
                  loading="lazy"
                  onError={handleImgError}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>
              <div className="absolute bottom-12 left-12 right-12 z-20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                <p className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[10px] mb-4">{item.category} • {item.location}</p>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">{item.title}</h3>
                <div className="flex items-center gap-4 text-white/70 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                  Read Case Study <span className="text-xl text-[#D4AF37]">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-32 text-center">
           <h3 className="text-white text-3xl font-serif mb-10 italic">Ready to start your own success story?</h3>
           <Link to="/contact" className="px-16 py-6 gold-gradient text-black font-black uppercase tracking-widest text-sm shadow-2xl inline-block hover:scale-105 transition-transform">
             Inquire About Your Date
           </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioListPage;
