
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CONTACT_INFO, SERVICES } from '../constants';
import { getEventAdvice } from '../services/geminiService';
import { InquiryMessage } from '../types';

/**
 * GETFORM INTEGRATION:
 * 1. Create a free account at https://getform.io
 * 2. Create a new form and copy your unique Endpoint URL.
 */
const GETFORM_ENDPOINT = ""; // Paste your Getform URL here for production

const ContactPage: React.FC = () => {
  const location = useLocation();
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [showPreFilledNotice, setShowPreFilledNotice] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Event Planning & Consulting',
    message: ''
  });

  // Handle pre-filled service from navigation state
  useEffect(() => {
    if (location.state && location.state.selectedService) {
      setFormData(prev => ({
        ...prev,
        service: location.state.selectedService
      }));
      setShowPreFilledNotice(true);
      
      const timer = setTimeout(() => setShowPreFilledNotice(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput) return;
    setIsLoading(true);
    const res = await getEventAdvice(chatInput);
    setChatResponse(res);
    setIsLoading(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const inquiryId = `ODR-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    const newInquiry: InquiryMessage = {
      id: inquiryId,
      ...formData,
      date: new Date().toLocaleString(),
      status: 'new'
    };

    try {
      // 1. Log to local storage for Admin Page functionality
      const existingMessages = JSON.parse(localStorage.getItem('odreg_messages') || '[]');
      localStorage.setItem('odreg_messages', JSON.stringify([newInquiry, ...existingMessages]));

      // 2. Submit to Getform
      if (GETFORM_ENDPOINT) {
        const response = await fetch(GETFORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            reference_id: inquiryId,
            submitted_at: newInquiry.date,
            _subject: `New Event Inquiry: ${formData.service} from ${formData.name}`
          })
        });

        if (!response.ok) {
          throw new Error('Getform service error');
        }
      }

      // Success State
      setRefId(inquiryId);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission Error:", err);
      setError("Email notification service is temporarily unavailable, but your message has been logged in our secure local database.");
      setRefId(inquiryId);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { name: 'Instagram', url: 'https://instagram.com', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058-1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    )},
    { name: 'Facebook', url: 'https://facebook.com', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
    )},
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    )},
    { name: 'TikTok', url: 'https://tiktok.com', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.05.58-.02 1.15.11 1.71.21.72.7 1.35 1.34 1.73.68.42 1.5.55 2.29.42 1.05-.12 2.01-.84 2.44-1.79.16-.39.24-.81.24-1.23.01-3.65-.02-7.3.03-10.95z"/></svg>
    )}
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-40 bg-zinc-50 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full bg-white p-12 md:p-20 shadow-2xl text-center border-t-8 border-[#D4AF37]">
          <div className="w-24 h-24 gold-gradient rounded-full mx-auto flex items-center justify-center text-black text-4xl mb-8 shadow-xl">✓</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">Inquiry Received</h2>
          {error ? (
             <div className="mb-8 p-4 bg-amber-50 border border-amber-200 text-amber-800 text-sm italic rounded-sm">
               {error}
             </div>
          ) : (
            <p className="text-zinc-500 mb-8 font-light leading-relaxed text-lg">
              Thank you for reaching out to ODREG. Our consultants will review your request and respond via email within 24 hours.
            </p>
          )}
          <div className="bg-zinc-50 p-6 rounded-sm mb-10 border border-zinc-100">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-2">Reference Number</p>
             <p className="text-2xl font-serif font-bold text-[#D4AF37]">{refId}</p>
          </div>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="px-12 py-5 bg-black text-[#D4AF37] font-black uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-black transition-all"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 bg-zinc-50 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="max-w-2xl">
              <p className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Connectivity</p>
              <h1 className="text-7xl md:text-9xl font-serif font-bold text-black leading-none">Reach <br/><span className="text-[#D4AF37] italic">Out</span>.</h1>
           </div>
           <p className="text-xl text-zinc-500 max-w-sm leading-relaxed font-light mb-4">
             Offices in Kingston upon Hull and Accra. We are globally accessible, locally focused.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* AI Consultant */}
          <div className="lg:col-span-5 lg:order-2 sticky top-32">
            <div className="bg-black text-white p-12 shadow-2xl border-t-8 border-[#D4AF37]">
              <div className="flex items-center gap-6 mb-12">
                 <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center text-black font-black text-2xl shadow-inner animate-pulse">
                    AI
                 </div>
                 <div>
                   <h3 className="text-3xl font-serif font-bold text-[#D4AF37]">Golden Advisor</h3>
                   <p className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-black">AI Strategist</p>
                 </div>
              </div>
              
              <form onSubmit={handleChat} className="space-y-6">
                <textarea 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask for instant event advice..."
                  className="w-full p-6 bg-zinc-900 border border-zinc-800 focus:border-[#D4AF37] text-white outline-none min-h-[160px] transition-all rounded-sm font-light"
                />
                <button 
                  disabled={isLoading}
                  className="w-full gold-gradient text-black font-black py-5 shadow-lg hover:brightness-110 disabled:opacity-50 uppercase tracking-[0.2em] text-[10px] transition-all"
                >
                  {isLoading ? 'Consulting...' : 'Seek Instant Advice ✨'}
                </button>
              </form>

              {chatResponse && (
                <div className="mt-10 p-8 bg-[#D4AF37]/5 border-l-4 border-[#D4AF37] animate-fade-in">
                  <div className="text-zinc-300 italic whitespace-pre-wrap leading-relaxed font-light text-sm">
                    {chatResponse}
                  </div>
                </div>
              )}
            </div>

            {/* Social Media Section */}
            <div className="hidden lg:block mt-12 bg-white p-10 shadow-xl border border-zinc-100">
               <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-8">Follow Our Journey</h3>
               <div className="grid grid-cols-2 gap-6">
                  {socials.map((social) => (
                    <a 
                      key={social.name} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-black transition-all">
                        {social.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-black">{social.name}</span>
                    </a>
                  ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:order-1 space-y-24">
            {/* Address Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               <div className="space-y-6">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Hull, United Kingdom</h3>
                  <div className="space-y-2">
                    <p className="text-2xl font-serif text-black">{CONTACT_INFO.address}</p>
                    <p className="text-zinc-500 font-light">+44 7442 852562</p>
                  </div>
               </div>
               <div className="space-y-6">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Accra, Ghana</h3>
                  <div className="space-y-2">
                    <p className="text-2xl font-serif text-black">Accra Operations HQ</p>
                    <p className="text-zinc-500 font-light">+233 2023 50250</p>
                  </div>
               </div>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="bg-white p-12 md:p-20 shadow-2xl border border-zinc-100 relative">
              <h3 className="text-4xl font-serif font-bold mb-12 text-black">Formal Inquiry</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-400">Full Name</label>
                  <input 
                    required
                    name="name"
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-4 border-b-2 border-zinc-100 focus:border-black outline-none font-light" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-400">Email Address</label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-4 border-b-2 border-zinc-100 focus:border-black outline-none font-light" 
                  />
                </div>
              </div>
              <div className={`space-y-3 mb-10 transition-all duration-1000 p-4 rounded-sm ${showPreFilledNotice ? 'bg-[#D4AF37]/10 ring-1 ring-[#D4AF37]' : ''}`}>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-400">Nature of Event / Service</label>
                    {showPreFilledNotice && (
                      <span className="text-[9px] font-black uppercase text-[#D4AF37] animate-pulse flex items-center gap-1">
                        ✨ Pre-selected
                      </span>
                    )}
                  </div>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full p-4 border-b-2 border-zinc-100 focus:border-black outline-none bg-white font-light cursor-pointer"
                  >
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Bespoke Consultation">Bespoke Consultation</option>
                  </select>
              </div>
              <div className="space-y-3 mb-12">
                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-400">Your Message</label>
                <textarea 
                  required
                  name="message"
                  rows={5} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-4 border-b-2 border-zinc-100 focus:border-black outline-none font-light resize-none" 
                  placeholder="Tell us about your dream event..."
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-[#D4AF37] font-black py-6 hover:bg-[#D4AF37] hover:text-black transition-all uppercase tracking-[0.4em] text-[10px] disabled:opacity-50 shadow-xl"
              >
                {isSubmitting ? 'Recording Inquiry...' : 'Submit Inquiry'}
              </button>
              
              {!GETFORM_ENDPOINT && (
                <p className="mt-4 text-[9px] text-zinc-400 uppercase tracking-widest text-center italic">
                  Note: Email system is in demo mode. Configure GETFORM_ENDPOINT for live notifications.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
