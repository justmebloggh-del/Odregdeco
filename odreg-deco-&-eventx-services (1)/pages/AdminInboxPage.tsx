
import React, { useState, useEffect } from 'react';
import { InquiryMessage } from '../types';

const AdminInboxPage: React.FC = () => {
  const [messages, setMessages] = useState<InquiryMessage[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('odreg_messages');
    if (saved) {
      setMessages(JSON.parse(saved));
    }
  }, []);

  const deleteMessage = (id: string) => {
    const updated = messages.filter(m => m.id !== id);
    setMessages(updated);
    localStorage.setItem('odreg_messages', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen pt-40 bg-zinc-900 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-20 flex justify-between items-end border-b border-zinc-800 pb-10">
          <div>
            <p className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Internal Systems</p>
            <h1 className="text-5xl font-serif font-bold text-white">Inquiry <span className="italic text-[#D4AF37]">Database</span></h1>
          </div>
          <div className="text-zinc-500 text-xs font-black uppercase tracking-widest">
            {messages.length} Records Found
          </div>
        </header>

        {messages.length === 0 ? (
          <div className="py-40 text-center border-2 border-dashed border-zinc-800 rounded-sm">
             <p className="text-zinc-600 font-serif italic text-2xl">The database is currently empty.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className="bg-black border border-zinc-800 p-10 hover:border-[#D4AF37] transition-all group">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  <div className="space-y-6 flex-grow">
                    <div className="flex items-center gap-4">
                      <span className="bg-[#D4AF37] text-black px-3 py-1 text-[9px] font-black uppercase tracking-tighter rounded-sm">
                        {msg.id}
                      </span>
                      <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                        Received: {msg.date}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif text-white mb-1">{msg.name}</h3>
                      <p className="text-[#D4AF37] text-xs font-bold">{msg.email}</p>
                    </div>
                    <div className="inline-block border border-zinc-800 px-4 py-2 rounded-sm">
                       <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">Requested Service</p>
                       <p className="text-white text-sm">{msg.service}</p>
                    </div>
                    <div className="pt-4 border-t border-zinc-800">
                      <p className="text-zinc-400 leading-relaxed font-light italic">"{msg.message}"</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <button 
                      onClick={() => deleteMessage(msg.id)}
                      className="px-8 py-3 bg-red-900/20 text-red-500 border border-red-900/50 text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all"
                    >
                      Delete Record
                    </button>
                    <button className="px-8 py-3 bg-zinc-800 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                      Reply via Email
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminInboxPage;
