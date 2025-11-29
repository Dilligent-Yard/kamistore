import React, { useEffect } from 'react';
import { AlertTriangle, ShieldAlert, CheckCircle2, X } from 'lucide-react';
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
      className="fixed inset-0 z-[100] overflow-y-auto"
      role="alertdialog" 
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
      />

      {/* Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-lg bg-[#0A0A0A] border border-amber-900/50 shadow-[0_0_50px_-10px_rgba(245,158,11,0.1)] flex flex-col animate-in fade-in zoom-in-95 duration-300">
          
          {/* Header Warning */}
          <div className="bg-amber-950/20 border-b border-amber-900/30 p-6 flex items-start gap-4">
            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-sm">
              <AlertTriangle className="text-amber-500" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-mono text-white tracking-widest uppercase font-bold">Aviso de Protocolo</h2>
              <p className="text-[10px] text-amber-500 font-mono mt-1 uppercase">LEIA COM ATENÇÃO ANTES DE PROSSEGUIR</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                 <span className="text-neutral-500 mt-1">01.</span>
                 <div className="space-y-1">
                    <h3 className="text-xs font-mono text-white uppercase tracking-wider">Pagamento P2P</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      O sistema Kāmi opera com pagamento <strong className="text-white">P2P (peer-to-peer)</strong>. A transação é feita puramente por email, sem intermediários financeiros.
                    </p>
                 </div>
              </div>

              <div className="flex gap-4 items-start">
                 <span className="text-neutral-500 mt-1">02.</span>
                 <div className="space-y-1">
                    <h3 className="text-xs font-mono text-white uppercase tracking-wider">Processamento por Email</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Após enviar seu pedido, você receberá um email com as instruções detalhadas para pagamento. O processamento é feito manualmente através de comunicação por email.
                    </p>
                 </div>
              </div>

              <div className="flex gap-4 items-start">
                 <span className="text-neutral-500 mt-1">03.</span>
                 <div className="space-y-1">
                    <h3 className="text-xs font-mono text-white uppercase tracking-wider">Garantia e Suporte</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Para garantias adicionais ou mediação, contate um dos operadores listados na seção <strong className="text-white border-b border-neutral-700">System Architects</strong> (Sobre Nós) antes de finalizar a transação.
                    </p>
                 </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 p-4 border border-neutral-800 flex items-center gap-3">
               <ShieldAlert size={16} className="text-neutral-500" />
               <span className="text-[10px] text-neutral-500 font-mono uppercase">
                 Ao prosseguir, você concorda com os termos acima.
               </span>
            </div>

          </div>

          {/* Actions */}
          <div className="p-6 border-t border-neutral-900 bg-[#080808] flex gap-4">
            <button 
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-neutral-800 text-neutral-400 text-[10px] font-mono uppercase tracking-widest hover:text-white hover:border-neutral-600 transition-colors"
            >
              Cancelar
            </button>
            <Button 
              variant="primary" 
              className="flex-1"
              onClick={onConfirm}
            >
              <span className="text-[10px]">Entendido / Prosseguir</span>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};
