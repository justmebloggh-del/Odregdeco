
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-32 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-1 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center font-bold text-black border-2 border-white">
                OD
              </div>
              <span className="font-serif text-xl font-bold tracking-[0.2em] text-[#D4AF37]">ODREG</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed font-light">
              Architecting luxury experiencex and bridging cultures from the United Kingdom to West Africa. Excellence is our only standard.
            </p>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37]">United Kingdom</h4>
            <div className="text-zinc-500 text-xs space-y-4 font-light leading-loose">
              <p>15 Manvers Street,<br/>Kingston upon Hull, HU3 1BB</p>
              <p>+44 7442 852562</p>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37]">Ghana</h4>
            <div className="text-zinc-500 text-xs space-y-4 font-light leading-loose">
              <p>Greater Accra & Ashanti Region<br/>Operations HQ</p>
              <p>+233 2023 50250</p>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37]">Navigation</h4>
            <ul className="text-zinc-500 text-xs space-y-4 font-light">
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#D4AF37] transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link></li>
              <li><Link to="/admin" className="hover:text-[#D4AF37] transition-colors italic">Inquiry Database (Admin)</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-zinc-900 gap-8">
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600">
            © {new Date().getFullYear()} ODREG DECO & EVENTX SERVICES.
          </div>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
             <button onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors">Privacy</button>
             <button onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors">Terms</button>
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
