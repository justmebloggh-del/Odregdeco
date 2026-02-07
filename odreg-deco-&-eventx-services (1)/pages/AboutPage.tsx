
import React from 'react';

const AboutPage: React.FC = () => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200";
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1920" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3]" 
          alt="Luxury Atmosphere" 
          onError={handleImgError}
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-[10px] mb-6">Established Excellence</p>
          <h1 className="text-6xl md:text-8xl font-serif text-white font-bold leading-none mb-4">Our <span className="italic">Story</span>.</h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif text-black leading-tight">Bridging Continents Through <span className="text-[#D4AF37] italic">Elegance</span>.</h2>
            <p className="text-xl text-zinc-600 leading-relaxed font-light">
              ODREG DECO & EVENTX SERVICES was founded on the belief that world-class execution shouldn't be limited by borders. We bring the structured precision of UK logistics to the vibrant heart of West African celebrations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1472653525502-fc569e405a74?auto=format&fit=crop&q=80&w=800" className="rounded-sm shadow-xl mt-12 w-full h-80 object-cover bg-zinc-100" alt="UK Hub" onError={handleImgError} />
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Hull, United Kingdom</p>
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1590074251800-410a560f6475?auto=format&fit=crop&q=80&w=800" className="rounded-sm shadow-xl w-full h-80 object-cover bg-zinc-100" alt="Ghana Heritage" onError={handleImgError} />
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Accra, Ghana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-black text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-serif mb-4">The ODREG Pillars</h3>
            <p className="text-[#D4AF37] font-black tracking-widest text-xs uppercase">Our Foundation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6 text-center">
              <div className="text-5xl text-[#D4AF37]">⚖️</div>
              <h4 className="text-2xl font-serif">Integrity</h4>
              <p className="text-zinc-400 font-light">Transparent budgeting and vendor management.</p>
            </div>
            <div className="space-y-6 text-center">
              <div className="text-5xl text-[#D4AF37]">🎭</div>
              <h4 className="text-2xl font-serif">Cultural Mastery</h4>
              <p className="text-zinc-400 font-light">Expertise in both British etiquette and Ghanaian traditional rites.</p>
            </div>
            <div className="space-y-6 text-center">
              <div className="text-5xl text-[#D4AF37]">🎯</div>
              <h4 className="text-2xl font-serif">Precision</h4>
              <p className="text-zinc-400 font-light">Timeline-driven coordination. Punctuality is respect.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
