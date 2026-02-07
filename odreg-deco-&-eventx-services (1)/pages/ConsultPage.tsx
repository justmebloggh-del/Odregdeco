
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getEventAdvice } from '../services/geminiService';

const ConsultPage: React.FC = () => {
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput) return;
    setIsLoading(true);
    const res = await getEventAdvice(chatInput);
    setChatResponse(res);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen pt-32 bg-black text-white flex flex-col">
      <div className="max-w-4xl mx-auto px-4 py-20 flex-grow w-full flex flex-col">
        <div className="text-center mb-16">
          <p className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-[10px] mb-6">Virtual Concierge</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">Golden <span className="text-[#D4AF37] italic">Advisor</span></h1>
          <p className="text-zinc-500 font-light max-w-2xl mx-auto italic">
            "Your dedicated AI strategist for UK and Ghana eventx logistics. Ask about budgets, traditions, venues, or coordination timelines."
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden flex flex-col shadow-2xl min-h-[500px]">
          {/* Chat History / Display Area */}
          <div className="flex-grow p-8 md:p-12 overflow-y-auto max-h-[600px] space-y-8">
            {!chatResponse && !isLoading && (
              <div className="text-center py-20 space-y-6">
                 <div className="w-24 h-24 gold-gradient rounded-full mx-auto flex items-center justify-center text-black font-black text-3xl animate-pulse">
                   AI
                 </div>
                 <p className="text-zinc-500 text-sm tracking-widest uppercase">Awaiting your vision...</p>
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-zinc-800 p-6 rounded-sm border-l-2 border-[#D4AF37] max-w-[80%]">
                    <p className="text-zinc-400 italic text-sm animate-pulse">Consulting the ODREG archives...</p>
                 </div>
              </div>
            )}

            {chatResponse && (
              <div className="flex justify-start animate-fade-in">
                 <div className="bg-zinc-800/80 p-10 rounded-sm border-l-4 border-[#D4AF37] max-w-full shadow-xl">
                    <div className="prose prose-invert prose-sm text-zinc-200 whitespace-pre-wrap leading-relaxed font-light italic">
                      {chatResponse}
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest text-[#D4AF37] font-black">
                       <span>ODREG Executive Intelligence</span>
                       <span className="text-zinc-600">Generated Strategy</span>
                    </div>
                 </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleChat} className="p-6 bg-zinc-900 border-t border-zinc-800">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="e.g. Help me plan a traditional Ghanaian wedding in Accra for 200 guests..."
                className="flex-grow bg-black border border-zinc-800 p-5 focus:border-[#D4AF37] outline-none text-white transition-all font-light rounded-sm"
              />
              <button 
                disabled={isLoading}
                className="gold-gradient text-black font-black px-10 py-5 uppercase tracking-widest text-[10px] hover:brightness-110 disabled:opacity-50 transition-all rounded-sm"
              >
                {isLoading ? 'Processing' : 'Ask Advisor'}
              </button>
            </div>
            <p className="text-[9px] text-zinc-700 mt-4 uppercase tracking-[0.2em] text-center italic">
              AI advice is conceptual. For official quotes, please visit the contact page.
            </p>
          </form>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/contact" className="text-zinc-500 hover:text-[#D4AF37] transition-colors text-[10px] font-black uppercase tracking-[0.3em] border-b border-zinc-800 pb-2">
            Speak to a Human Consultant <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConsultPage;
