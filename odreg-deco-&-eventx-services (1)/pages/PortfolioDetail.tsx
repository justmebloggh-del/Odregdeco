
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PORTFOLIO } from '../constants';

const PortfolioDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PORTFOLIO.find(p => p.id === id);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-[#D4AF37] font-bold hover:underline">Return to Portfolio</Link>
        </div>
      </div>
    );
  }

  const carouselImages = project.images.slice(1);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200";
  };

  return (
    <div className="bg-zinc-50 min-h-screen pb-24">
      {/* Immersive Header */}
      <div className="bg-black pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs mb-4">Case Study / {project.category}</p>
          <h1 className="text-4xl md:text-7xl font-serif text-white font-bold mb-6">{project.title}</h1>
          <div className="flex justify-center items-center gap-8 text-zinc-400 text-sm uppercase tracking-widest">
            <span className="flex items-center gap-2">📍 {project.location}</span>
            <span className="h-1 w-1 bg-[#D4AF37] rounded-full"></span>
            <span>Premium Execution</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8 space-y-12">
            {/* Featured Image */}
            <div className="rounded-sm overflow-hidden shadow-2xl border-4 border-white bg-zinc-200 aspect-video">
              <img 
                src={project.images[0]} 
                alt={project.title} 
                className="w-full h-full object-cover" 
                onError={handleImgError}
              />
            </div>

            <div className="bg-white p-12 shadow-sm space-y-8">
              <h2 className="text-4xl font-serif font-bold text-black border-l-4 border-[#D4AF37] pl-8">The Journey</h2>
              <div className="prose prose-xl text-zinc-700 leading-loose max-w-none font-light">
                {project.fullStory}
              </div>
            </div>

            {/* Gallery Carousel */}
            {carouselImages.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-black">Gallery Showcase</h3>
                <div className="relative group overflow-hidden bg-zinc-900 rounded-sm shadow-2xl aspect-video md:aspect-[21/9]">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {carouselImages.map((img, idx) => (
                      <div key={idx} className="w-full h-full flex-shrink-0 bg-zinc-800">
                        <img 
                          src={img} 
                          alt={`${project.title} gallery ${idx}`} 
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                          onError={handleImgError}
                        />
                      </div>
                    ))}
                  </div>

                  {carouselImages.length > 1 && (
                    <>
                      <button 
                        onClick={prevSlide}
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 transform -translate-x-20 group-hover:translate-x-0"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                      </button>
                      <button 
                        onClick={nextSlide}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 transform translate-x-20 group-hover:translate-x-0"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                      </button>
                    </>
                  )}

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                    {carouselImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 transition-all duration-500 rounded-full ${currentSlide === idx ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/40 hover:bg-white/60'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <aside className="md:col-span-4">
             <div className="sticky top-24 space-y-8">
                <div className="bg-white p-8 shadow-sm border-t-4 border-[#D4AF37]">
                   <h3 className="text-xl font-bold uppercase tracking-widest mb-6">Event Specs</h3>
                   <div className="space-y-6">
                      <div>
                        <p className="text-xs text-zinc-400 uppercase font-bold mb-1">Location</p>
                        <p className="text-lg font-serif">{project.location}</p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 uppercase font-bold mb-1">Status</p>
                        <p className="text-lg font-serif text-[#D4AF37]">Premium Delivery</p>
                      </div>
                   </div>
                </div>
                <div className="bg-black text-white p-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
                  <h3 className="text-xl font-serif mb-4 relative z-10">Want something similar?</h3>
                  <Link to="/contact" className="relative z-10 block text-center py-3 border border-[#D4AF37] text-[#D4AF37] font-bold hover:bg-[#D4AF37] hover:text-black transition-all uppercase text-xs tracking-widest">
                    Start Your Project
                  </Link>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
