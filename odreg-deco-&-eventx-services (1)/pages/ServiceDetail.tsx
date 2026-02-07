
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200";
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F4E4BC]">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Service Not Found</h1>
          <Link to="/services" className="text-[#D4AF37] font-bold hover:underline">Return to Services</Link>
        </div>
      </div>
    );
  }

  // Use local images for the gallery
  const gallery = [
    "./images/royal-couple-standing.jpg",
    "./images/vip-guest-protocol.jpg",
    "./images/royal-throne-ceremony.jpg",
    "./images/cultural-tour-torgag.jpg"
  ].filter(img => img !== service.image).slice(0, 2);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="relative h-[500px] flex items-center justify-center">
        <img 
          src={service.image} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-cover brightness-50" 
          onError={handleImgError}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <div className="text-6xl mb-8 animate-bounce inline-block">{service.icon}</div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6">{service.title}</h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <span className="text-[#D4AF37] uppercase tracking-[0.4em] font-black text-xs border border-[#D4AF37] px-6 py-2">ODREG Signature Service</span>
            <Link 
              to="/contact" 
              state={{ selectedService: service.title }}
              className="px-10 py-4 bg-[#D4AF37] text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-2xl"
            >
              Book This Service Now
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#D4AF37]"></span> Overview
              </h2>
              <p className="text-xl text-zinc-700 leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-[#D4AF37]">
                {service.fullContent}
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#fdfaf2] p-8 rounded-sm border-l-4 border-[#D4AF37]">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-zinc-800">Our Process</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="font-serif text-[#D4AF37] font-bold">01.</span>
                    <p className="text-zinc-600 text-sm">Initial Consultation & Vision Discovery</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-serif text-[#D4AF37] font-bold">02.</span>
                    <p className="text-zinc-600 text-sm">Strategic Planning & Budget Allocation</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-serif text-[#D4AF37] font-bold">03.</span>
                    <p className="text-zinc-600 text-sm">Vendor Management & Design Execution</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-serif text-[#D4AF37] font-bold">04.</span>
                    <p className="text-zinc-600 text-sm">Final Delivery & On-Site Management</p>
                  </li>
                </ul>
              </div>
              <div className="bg-black p-8 rounded-sm text-white">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-[#D4AF37]">The ODREG Edge</h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex items-center gap-2">✓ UK-Ghana Integrated Workflow</li>
                  <li className="flex items-center gap-2">✓ Multi-Currency Budgeting</li>
                  <li className="flex items-center gap-2">✓ Cultural Sensitivity Experts</li>
                  <li className="flex items-center gap-2">✓ 24/7 Response for Premium Clients</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold mb-8">Related Visuals</h2>
              <div className="grid grid-cols-2 gap-4">
                {gallery.map((img, i) => (
                  <img 
                    key={i}
                    src={img} 
                    alt={`Gallery ${i + 1}`} 
                    className="rounded-sm hover:opacity-80 transition-opacity cursor-pointer w-full h-64 object-cover" 
                    onError={handleImgError}
                  />
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1 space-y-8">
             <div className="sticky top-24">
                <div className="bg-zinc-900 text-white p-10 rounded-sm shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full -mr-16 -mt-16"></div>
                   <h3 className="text-3xl font-serif mb-6 relative z-10">Enquire Today</h3>
                   <p className="text-zinc-400 mb-8 relative z-10 text-sm leading-relaxed">
                     Ready to bring this service to your next eventx? Contact our consultants in Hull or Accra for a bespoke proposal.
                   </p>
                   <Link 
                    to="/contact" 
                    state={{ selectedService: service.title }}
                    className="block w-full bg-[#D4AF37] text-black text-center font-bold py-4 hover:bg-white transition-colors relative z-10 uppercase tracking-widest text-xs"
                   >
                     Book "{service.title}"
                   </Link>
                   <div className="mt-8 pt-8 border-t border-zinc-800 space-y-4">
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-[#D4AF37]">UK:</span> +44 7442 852562
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-[#D4AF37]">GH:</span> +233 2023 50250
                      </div>
                   </div>
                </div>

                <div className="mt-8 p-6 border-2 border-[#D4AF37]/20 rounded-sm">
                   <h4 className="text-sm font-bold uppercase mb-4 tracking-tighter">Other Services</h4>
                   <div className="space-y-3">
                      {SERVICES.filter(s => s.id !== id).slice(0, 3).map(s => (
                        <Link key={s.id} to={`/services/${s.id}`} className="block text-zinc-600 hover:text-[#D4AF37] transition-colors text-sm font-medium">
                          • {s.title}
                        </Link>
                      ))}
                   </div>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
