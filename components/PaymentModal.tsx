import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { UI_TEXT } from '../constants';
import { Button } from './Button';
import { X, Lock, Zap, FileText, Clock, RefreshCw, CheckCircle, Terminal, Shield } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  total: number;
  cart: Product[];
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, onConfirm, total, cart }) => {
  const [processing, setProcessing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [transactionId, setTransactionId] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (isOpen) {
      const randomId = Math.random().toString(36).substring(2, 10).toUpperCase();
      const date = new Date();
      const timeStr = `${date.getHours()}${date.getMinutes()}`;
      setTransactionId(`TX-${timeStr}-${randomId}`);
      setTimeLeft(600);
      setFormSubmitted(false);
      setEmail('');
      setName('');
      setProcessing(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [isOpen, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProcessing(true);
    
    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', name);
    formData.append('total', total.toFixed(2));
    formData.append('items', JSON.stringify(cart.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      protocol: item.protocol
    }))));
    formData.append('transactionId', transactionId);

    try {
      const response = await fetch('https://formspree.io/f/xeobbqdn', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setFormSubmitted(true);
        setProcessing(false);
        setTimeout(() => { onConfirm(); }, 3000);
      } else {
        setProcessing(false);
        alert('Erro de Transmissão. Tente novamente.');
      }
    } catch (error) {
      setProcessing(false);
        alert('Erro de Rede. Tente novamente.');
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-0 md:p-6" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm transition-opacity duration-300" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-[#050505] border border-neutral-800 shadow-2xl flex flex-col md:flex-row h-full md:h-auto md:min-h-[600px] animate-in fade-in zoom-in-95 duration-300">
        
        {/* Left Panel: Terminal Data */}
        <div className="w-full md:w-5/12 bg-[#020202] border-b md:border-b-0 md:border-r border-neutral-900 p-8 flex flex-col relative justify-between">
          
          <div>
            <div className="flex items-center gap-3 mb-8">
               <div className="p-2 border border-emerald-900/50 bg-emerald-950/20">
                 <Terminal size={16} className="text-emerald-500" />
               </div>
               <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Terminal Seguro</span>
            </div>
            <h2 className="text-2xl text-white font-light tracking-tight mb-4 uppercase">{UI_TEXT.paymentTitle}</h2>
            
            <div className="mb-12 border-l-2 border-emerald-500 pl-4">
               <span className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest block mb-1">{UI_TEXT.total}</span>
               <div className="flex items-baseline gap-2">
                 <span className="text-sm font-mono text-neutral-500">BRL</span>
                 <span className="text-4xl text-white tracking-tighter font-medium">{formatPrice(total)}</span>
               </div>
            </div>
          </div>

          <div className="space-y-0 border-t border-neutral-900">
            <div className="flex justify-between items-center py-4 border-b border-neutral-900">
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-mono flex items-center gap-2">
                <FileText size={12} /> {UI_TEXT.transactionId}
              </span>
              <span className="text-[10px] text-white font-mono bg-neutral-900/50 px-2 py-1 border border-neutral-800">{transactionId}</span>
            </div>
            
            <div className="flex justify-between items-center py-4 border-b border-neutral-900">
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-mono flex items-center gap-2">
                 <Lock size={12} /> Criptografia
              </span>
              <span className="text-[10px] text-emerald-500/80 font-mono uppercase flex items-center gap-1">
                <Shield size={10} /> AES-256
              </span>
            </div>
          </div>
        </div>

        {/* Right Panel: Interaction */}
        <div className="w-full md:w-7/12 bg-[#050505] p-8 md:p-12 relative flex flex-col items-center justify-center">
          
          <button onClick={onClose} className="absolute top-6 right-6 text-neutral-600 hover:text-white transition-colors p-2 hover:bg-neutral-900">
            <X size={20} strokeWidth={1} />
          </button>

          <div className="absolute top-6 left-6 md:left-auto md:right-20 flex items-center gap-2 font-mono text-[10px] text-neutral-500 border border-neutral-900 px-3 py-1 bg-[#020202]">
             <Clock size={10} className={timeLeft < 60 ? "text-red-500" : ""} />
             <span>SESSÃO: {formatTime(timeLeft)}</span>
          </div>

          <div className="w-full max-w-sm mt-8">
            {formSubmitted ? (
              <div className="flex flex-col items-center text-center space-y-8 animate-in slide-in-from-bottom-4 duration-500">
                <div className="w-24 h-24 border border-emerald-900/30 bg-emerald-950/10 rounded-full flex items-center justify-center relative">
                  <div className="absolute inset-0 border border-emerald-500/20 rounded-full animate-[ping_2s_ease-out_infinite] opacity-20"></div>
                  <CheckCircle size={40} className="text-emerald-500" strokeWidth={1} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl text-white font-light uppercase tracking-widest">Solicitação Enfileirada</h3>
                  <p className="text-xs text-neutral-500 font-mono leading-relaxed max-w-[250px] mx-auto border-t border-neutral-900 pt-4 mt-2">
                    Verifique sua caixa de entrada para as coordenadas de transferência P2P.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-10 w-full">
                   <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                      <span className="w-1 h-4 bg-emerald-500"></span>
                      Dados Necessários
                   </h3>
                   
                   <div className="p-4 bg-emerald-950/5 border border-emerald-900/20 mb-6 flex gap-3">
                      <Zap size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <p className="text-[10px] text-emerald-500 font-mono leading-relaxed">
                         AVISO: Isso inicia um handshake P2P. Os detalhes do pagamento serão transmitidos com segurança para o endereço de email fornecido.
                      </p>
                   </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 w-full">
                  <div className="group relative">
                     <label className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block mb-2 group-focus-within:text-white transition-colors">
                       Nome Completo
                     </label>
                     <input
                       type="text"
                       required
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       className="w-full h-12 bg-transparent border-b border-neutral-800 focus:border-white px-0 font-mono text-sm text-white focus:outline-none transition-colors placeholder:text-neutral-800"
                       placeholder="DIGITE O NOME"
                     />
                  </div>

                  <div className="group relative">
                     <label className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block mb-2 group-focus-within:text-white transition-colors">
                       Email de Contato Seguro
                     </label>
                     <input
                       type="email"
                       required
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       className="w-full h-12 bg-transparent border-b border-neutral-800 focus:border-white px-0 font-mono text-sm text-white focus:outline-none transition-colors placeholder:text-neutral-800"
                       placeholder="DIGITE O EMAIL"
                     />
                  </div>

                  <Button 
                      type="submit"
                      fullWidth 
                      variant="primary" 
                      disabled={processing}
                      className="mt-8"
                   >
                     {processing ? (
                       <div className="flex items-center gap-3">
                         <RefreshCw size={14} className="animate-spin" />
                         <span>SINCRONIZANDO...</span>
                       </div>
                     ) : (
                       <div className="flex items-center gap-3">
                          <Zap size={14} className="fill-black" />
                          <span>INICIAR TRANSFERÊNCIA</span>
                       </div>
                     )}
                   </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

