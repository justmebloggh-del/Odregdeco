
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServicesListPage: React.FC = () => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200";
  };

  return (
    <div className="bg-white pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-32 text-center">
          <p className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Our Service Portfolio</p>
          <h1 className="text-7xl md:text-9xl font-serif font-bold text-black mb-8 leading-none">The <span className="italic">Standard</span>.</h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">
            From meticulous planning to on-site protocol, we provide a comprehensive suite of luxury event solutions tailored for the discerning client.
          </p>
        </header>

        <div className="space-y-32">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2 group relative">
                 <div className="absolute -inset-4 bg-[#F4E4BC] -z-10 transition-transform group-hover:scale-105 group-hover:rotate-2 duration-700"></div>
                 <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-[600px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" 
                  onError={handleImgError}
                 />
                 <div className="absolute top-8 left-8 bg-black text-[#D4AF37] w-20 h-20 flex items-center justify-center text-4xl shadow-2xl border border-[#D4AF37]">
                    {service.icon}
                 </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-8">
                <span className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.5em]">0{idx + 1} / Service Tier</span>
                <h2 className="text-5xl font-serif font-bold text-black leading-tight">{service.title}</h2>
                <p className="text-lg text-zinc-600 font-light leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-6">
                  <Link to={`/services/${service.id}`} className="group inline-flex items-center gap-6 text-black font-black uppercase tracking-widest text-xs border-b-2 border-black pb-2 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
                    View Complete Details <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesListPage;
