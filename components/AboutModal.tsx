import React, { useState, useEffect } from 'react';
import { X, Code2, Crown, Copy, Check, Headphones } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const RICK_IMG = "https://i.pinimg.com/736x/26/c1/e5/26c1e5c64a4dff4e2f74e0ababbc0fc5.jpg";
  const RIGEL_IMG = "https://i.pinimg.com/736x/59/c8/4c/59c84c9862fafd7766e3e1f58fe561ff.jpg";
  const NOOB_IMG = "https://i.pinimg.com/736x/b8/63/84/b86384e5ec88ae4dbc851e1c03ea4990.jpg";

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/95 backdrop-blur-sm transition-opacity duration-500" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Scrollable Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        
        <div className="relative w-full max-w-6xl bg-[#080808] border border-neutral-900 flex flex-col animate-in fade-in zoom-in-95 duration-300 my-4 md:my-8">
          
          {/* Header */}
          <div className="flex justify-between items-center p-6 md:p-8 border-b border-neutral-900 sticky top-0 bg-[#080808] z-20">
            <div className="flex flex-col">
              <h2 className="text-xl font-mono text-white tracking-[0.2em] uppercase">System Architects</h2>
              <span className="text-[10px] text-neutral-500 font-mono mt-1">KĀMI.SYS // CORE_TEAM</span>
            </div>
            <button 
              onClick={onClose} 
              className="text-neutral-500 hover:text-white transition-colors p-2"
              aria-label="Close"
            >
              <X strokeWidth={1} size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative overflow-hidden">
            
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none"></div>

            {/* Rick - Fullstack */}
            <div className="flex flex-col items-center text-center group relative z-10">
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-neutral-800 group-hover:border-neutral-500 transition-colors duration-500 relative z-10">
                  <img 
                    src={RICK_IMG} 
                    alt="Rick" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="absolute inset-0 rounded-full border border-dashed border-neutral-700 animate-[spin_10s_linear_infinite] scale-125 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <h3 className="text-xl text-white font-light tracking-widest mb-1">RICK</h3>
              <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-6">
                <Code2 size={12} />
                <span>Fullstack Developer</span>
              </div>

              <div className="w-full max-w-[150px] h-px bg-neutral-900 mb-6"></div>

              <div className="flex flex-col items-center gap-2">
                <span className="text-[9px] text-neutral-600 font-mono uppercase">DISCORD</span>
                <button 
                  onClick={() => handleCopy('panzergeistt')}
                  className="flex items-center gap-3 px-4 py-2 border border-neutral-800 bg-neutral-950/50 hover:bg-neutral-900 transition-all group/btn"
                >
                  <div className={`w-2 h-2 rounded-full ${copiedId === 'panzergeistt' ? 'bg-green-500' : 'bg-indigo-500'}`}></div>
                  <span className={`text-[10px] font-mono ${copiedId === 'panzergeistt' ? 'text-green-500' : 'text-neutral-300'}`}>
                    {copiedId === 'panzergeistt' ? 'COPIED' : 'panzergeistt'}
                  </span>
                  {copiedId === 'panzergeistt' ? <Check size={12} className="text-green-500" /> : <Copy size={12} className="text-neutral-600 group-hover/btn:text-white" />}
                </button>
              </div>
            </div>

            {/* Rigel - CEO */}
            <div className="flex flex-col items-center text-center group relative z-10">
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-neutral-800 group-hover:border-white transition-colors duration-500 relative z-10">
                  <img 
                    src={RIGEL_IMG} 
                    alt="Rigel" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                 <div className="absolute -inset-4 border border-neutral-800 rounded-full opacity-0 group-hover:opacity-100 scale-110 transition-all duration-700"></div>
              </div>

              <h3 className="text-xl text-white font-light tracking-widest mb-1">RIGEL</h3>
              <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-6">
                <Crown size={12} />
                <span>CEO & Owner</span>
              </div>

              <div className="w-full max-w-[150px] h-px bg-neutral-900 mb-6"></div>

              <div className="flex flex-col items-center gap-2 opacity-50">
                <span className="text-[9px] text-neutral-600 font-mono uppercase">DISCORD</span>
                <div className="px-4 py-2 border border-transparent">
                  <span className="text-[10px] font-mono text-neutral-700 tracking-widest">NO_ACCESS</span>
                </div>
              </div>
            </div>

            {/* Noob04 - Support */}
            <div className="flex flex-col items-center text-center group relative z-10">
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-neutral-800 group-hover:border-neutral-500 transition-colors duration-500 relative z-10">
                  <img 
                    src={NOOB_IMG} 
                    alt="Noob04" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="absolute inset-0 rounded-full border border-dashed border-neutral-700 animate-[spin_10s_linear_infinite] scale-125 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <h3 className="text-xl text-white font-light tracking-widest mb-1">Noob⁰⁴</h3>
              <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-6">
                <Headphones size={12} />
                <span>Support</span>
              </div>

              <div className="w-full max-w-[150px] h-px bg-neutral-900 mb-6"></div>

              <div className="flex flex-col items-center gap-2">
                <span className="text-[9px] text-neutral-600 font-mono uppercase">DISCORD</span>
                <button 
                  onClick={() => handleCopy('52777675')}
                  className="flex items-center gap-3 px-4 py-2 border border-neutral-800 bg-neutral-950/50 hover:bg-neutral-900 transition-all group/btn"
                >
                  <div className={`w-2 h-2 rounded-full ${copiedId === '52777675' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                  <span className={`text-[10px] font-mono ${copiedId === '52777675' ? 'text-green-500' : 'text-neutral-300'}`}>
                    {copiedId === '52777675' ? 'COPIED' : '52777675'}
                  </span>
                  {copiedId === '52777675' ? <Check size={12} className="text-green-500" /> : <Copy size={12} className="text-neutral-600 group-hover/btn:text-white" />}
                </button>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="p-4 border-t border-neutral-900 bg-[#0A0A0A] flex justify-between items-center">
              <span className="text-[9px] text-neutral-700 font-mono">EST. 2024</span>
              <span className="text-[9px] text-neutral-700 font-mono">TOKYO // BRASIL</span>
          </div>
        </div>
      </div>
    </div>
  );
};