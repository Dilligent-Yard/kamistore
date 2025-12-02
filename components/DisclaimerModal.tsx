import React, { useEffect } from 'react';
import { AlertTriangle, ShieldAlert, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ isOpen, onClose, onConfirm }) => {
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

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-0"
      role="alertdialog" 
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose}
      />

      {/* Modal Frame */}
      <div className="relative w-full max-w-md bg-[#050505] border border-neutral-800 shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-300">
          
        {/* Header Warning */}
        <div className="bg-[#050505] border-b border-neutral-800 p-8 flex flex-col gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <AlertTriangle size={64} />
          </div>
          
          <div className="w-10 h-10 border border-amber-900/50 bg-amber-950/20 flex items-center justify-center relative z-10">
            <AlertTriangle className="text-amber-600" size={20} strokeWidth={1.5} />
          </div>
          <div className="relative z-10">
            <h2 className="text-sm font-bold font-mono text-white tracking-[0.2em] uppercase">Aviso de Protocolo</h2>
            <p className="text-[10px] text-amber-600/80 font-mono mt-1 uppercase tracking-wide">Leia cuidadosamente antes de prosseguir</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8 bg-neutral-900/10">
          
          <div className="space-y-6">
            <div className="flex gap-4 group">
                <span className="text-[10px] font-mono text-neutral-600 border border-neutral-800 h-6 w-6 flex items-center justify-center group-hover:border-white transition-colors">01</span>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Rede P2P</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-mono">
                    Protocolo de transferência direta. Sem intermediários financeiros. Lógica de transação pura ponto a ponto.
                  </p>
                </div>
            </div>

            <div className="flex gap-4 group">
                <span className="text-[10px] font-mono text-neutral-600 border border-neutral-800 h-6 w-6 flex items-center justify-center group-hover:border-white transition-colors">02</span>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Handshake por Email</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-mono">
                    O processamento inicia via comunicação de email criptografada após a solicitação.
                  </p>
                </div>
            </div>
          </div>

          <div className="p-4 border border-neutral-800 bg-[#020202] flex items-center gap-4">
              <ShieldAlert size={16} className="text-neutral-500" />
              <span className="text-[9px] text-neutral-500 font-mono uppercase tracking-wide">
                Ao prosseguir, você concorda com os termos.
              </span>
          </div>

        </div>

        {/* Actions */}
        <div className="p-4 border-t border-neutral-800 bg-[#050505] flex gap-3">
          <button 
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-neutral-800 text-neutral-500 text-[10px] font-mono uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors"
          >
            Cancelar
          </button>
          <Button 
            variant="primary" 
            className="flex-[1.5] h-auto py-3"
            onClick={onConfirm}
          >
            <span className="text-[10px] flex items-center gap-2">
              Prosseguir <ArrowRight size={12} />
            </span>
          </Button>
        </div>

      </div>
    </div>
  );
};

