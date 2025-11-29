import React, { useState, useEffect } from 'react';
import { Language, Product } from '../types';
import { UI_TEXT } from '../constants';
import { Button } from './Button';
import { X, Lock, Zap, Building2, FileText, AlertTriangle, ShieldCheck, Clock, RefreshCw, Mail, CheckCircle } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  total: number;
  lang: Language;
  cart: Product[];
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, onConfirm, total, lang, cart }) => {
  const [processing, setProcessing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [transactionId, setTransactionId] = useState('');
  const [progressLog, setProgressLog] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (isOpen) {
      // Generate random transaction ID
      const randomId = Math.random().toString(36).substring(2, 10).toUpperCase();
      const date = new Date();
      const timeStr = `${date.getHours()}${date.getMinutes()}`;
      setTransactionId(`TX-${timeStr}-${randomId}`);
      setTimeLeft(600);
      // Reset form state
      setFormSubmitted(false);
      setEmail('');
      setName('');
      setProcessing(false);
      // Lock body scroll
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
    
    // Prepare form data
    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', name);
    formData.append('total', total.toFixed(2));
    formData.append('items', JSON.stringify(cart.map(item => ({
      id: item.id,
      name: item.name[lang],
      price: item.price
    }))));
    formData.append('transactionId', transactionId);

    try {
      const response = await fetch('https://formspree.io/f/xeobbqdn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormSubmitted(true);
        setProcessing(false);
        // Show success message for 3 seconds, then close
        setTimeout(() => {
          onConfirm();
        }, 3000);
      } else {
        setProcessing(false);
        alert('Erro ao enviar pedido. Por favor, tente novamente.');
      }
    } catch (error) {
      setProcessing(false);
      alert('Erro ao enviar pedido. Por favor, tente novamente.');
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div 
      className="fixed inset-0 z-[60] overflow-y-auto" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="payment-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Scrollable Container Wrapper */}
      <div className="flex min-h-full w-full justify-center p-4 md:p-6 pointer-events-none">
        
        {/* Main Terminal Window */}
        <div className="relative pointer-events-auto w-full max-w-5xl bg-[#080808] border border-neutral-800 shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300 rounded-sm m-auto text-left">
          
          {/* Left Panel: Transaction Data (Bottom on Mobile) */}
          <div className="w-full md:w-5/12 bg-[#0C0C0C] border-b md:border-b-0 md:border-r border-neutral-800 p-6 md:p-10 flex flex-col relative order-2 md:order-1">
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 flex items-center justify-center rounded-sm shrink-0">
                 <Lock size={16} className="text-emerald-500" />
              </div>
              <div>
                <h2 id="payment-title" className="text-xs font-mono text-white uppercase tracking-[0.2em]">{UI_TEXT.paymentTitle[lang]}</h2>
                <span className="text-[9px] text-emerald-600 font-mono flex items-center gap-1 mt-1">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
                  ENCRYPTED_CHANNEL_ACTIVE
                </span>
              </div>
            </div>

            {/* Amount Display */}
            <div className="mb-8 md:mb-10 relative">
               <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block mb-2">{UI_TEXT.total[lang]}</span>
               <div className="flex items-baseline gap-2">
                 <span className="text-lg font-mono text-neutral-500">BRL</span>
                 <span className="text-5xl font-light text-white tracking-tighter break-all">{formatPrice(total)}</span>
               </div>
               {/* Decorative line */}
               <div className="absolute -left-10 top-1/2 w-8 h-px bg-emerald-900/50 hidden md:block"></div>
            </div>

            {/* Transaction Table */}
            <div className="space-y-0 mb-8 flex-grow border-t border-neutral-900">
              <div className="flex justify-between items-center py-4 border-b border-neutral-900/50 flex-wrap gap-2">
                <span className="flex items-center gap-2 text-[10px] text-neutral-500 uppercase tracking-wider font-mono">
                  <FileText size={10} />
                  {UI_TEXT.transactionId[lang]}
                </span>
                <span className="text-[10px] text-white font-mono bg-neutral-900 px-2 py-1 rounded-sm break-all">{transactionId}</span>
              </div>
              
              <div className="flex justify-between items-center py-4 border-b border-neutral-900/50">
                <span className="flex items-center gap-2 text-[10px] text-neutral-500 uppercase tracking-wider font-mono">
                  <Building2 size={10} />
                  {UI_TEXT.beneficiary[lang]}
                </span>
                <span className="text-[10px] text-neutral-300 font-mono uppercase text-right">KĀMI DIGITAL SYSTEMS</span>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-neutral-900/50">
                 <span className="flex items-center gap-2 text-[10px] text-neutral-500 uppercase tracking-wider font-mono">
                  <ShieldCheck size={10} />
                  {UI_TEXT.bank[lang]}
                </span>
                <span className="text-[10px] text-neutral-300 font-mono uppercase text-right">OPEN FINANCE GATEWAY</span>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-neutral-900/50">
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-mono pl-5">{UI_TEXT.status[lang]}</span>
                <span className="text-[9px] text-yellow-500 bg-yellow-950/20 px-2 py-1 rounded-sm border border-yellow-900/30 uppercase tracking-wider font-mono flex items-center gap-2">
                   <span className="w-1 h-1 rounded-full bg-yellow-500 animate-pulse"></span>
                   {UI_TEXT.statusPending[lang]}
                </span>
              </div>
            </div>

            {/* Security Footer */}
            <div className="mt-auto pt-4 md:pt-0 flex items-center gap-3 opacity-60 md:opacity-40 hover:opacity-100 transition-opacity duration-300">
               <ShieldCheck size={24} className="text-neutral-600" strokeWidth={1} />
               <div className="flex flex-col">
                 <span className="text-[9px] text-neutral-400 font-mono uppercase">TLS 1.3 // AES-256-GCM</span>
                 <span className="text-[8px] text-neutral-600 font-mono">VERIFIED BY KAMI.SYS SECURITY</span>
               </div>
            </div>
          </div>

          {/* Right Panel: Action Area (Top on Mobile) */}
          <div className="w-full md:w-7/12 bg-[#050505] p-6 md:p-8 relative flex flex-col items-center order-1 md:order-2">
            
            {/* Close Button */}
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 md:top-6 md:right-6 text-neutral-500 hover:text-white transition-colors z-20 p-2 active:scale-95 bg-neutral-900/50 rounded-full md:bg-transparent"
              aria-label="Close modal"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            {/* Expiry Timer */}
            <div className="absolute top-4 left-4 md:top-6 md:left-auto md:right-20 flex items-center gap-2 font-mono text-xs text-neutral-400 bg-neutral-900/50 px-3 py-1.5 rounded-sm border border-neutral-800">
               <Clock size={12} className={timeLeft < 60 ? "text-red-500 animate-pulse" : "text-neutral-500"} />
               <span className="hidden xs:inline">{UI_TEXT.expiresIn[lang]}: </span>
               <span className={timeLeft < 60 ? "text-red-500" : "text-white"}>{formatTime(timeLeft)}</span>
            </div>

            <div className="w-full max-w-sm flex flex-col items-center z-10 mt-16 md:mt-12">
              
              {formSubmitted ? (
                <div className="w-full flex flex-col items-center space-y-6">
                  <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center">
                    <CheckCircle size={40} className="text-emerald-500" />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-lg font-mono text-white uppercase tracking-wider">Pedido Enviado</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      O pagamento é P2P (peer-to-peer). Em breve você receberá um email com as instruções para pagamento. A transação é feita puramente por email.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Instructions Header */}
                  <div className="flex items-center gap-2 mb-6">
                     <Mail size={14} className="text-emerald-500" />
                     <span className="text-[10px] font-mono font-bold text-emerald-500 tracking-[0.2em] uppercase">
                        Dados do Pedido
                     </span>
                  </div>

                  {/* Success Message Warning */}
                  <div className="w-full mb-6 relative overflow-hidden group">
                     <div className="bg-emerald-950/20 border-l-2 border-emerald-600 p-4 relative">
                        <div className="flex gap-3">
                           <Mail className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                           <div className="flex flex-col gap-1">
                              <span className="text-[9px] font-mono text-emerald-500 font-bold tracking-widest uppercase">
                                 Instruções de Pagamento
                              </span>
                              <p className="text-[10px] md:text-[11px] text-emerald-400 font-semibold leading-relaxed tracking-wide">
                                 O pagamento é P2P (peer-to-peer). Em breve você receberá um email com as instruções para pagamento. A transação é feita puramente por email.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="w-full space-y-5">
                    <div className="space-y-2">
                       <label className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest px-1">
                         Nome Completo
                       </label>
                       <input
                         type="text"
                         required
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         className="w-full h-12 border border-neutral-800 bg-[#080808] px-4 font-mono text-[11px] text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                         placeholder="Seu nome completo"
                       />
                    </div>

                    <div className="space-y-2">
                       <label className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest px-1">
                         Email
                       </label>
                       <input
                         type="email"
                         required
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         className="w-full h-12 border border-neutral-800 bg-[#080808] px-4 font-mono text-[11px] text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                         placeholder="seu@email.com"
                       />
                    </div>

                    {/* Submit Button */}
                    <Button 
                        type="submit"
                        fullWidth 
                        variant="primary" 
                        disabled={processing}
                        className="mt-6 h-14 relative overflow-hidden bg-white hover:bg-emerald-400 hover:text-black transition-all duration-500 border-none touch-manipulation"
                     >
                       {processing ? (
                         <div className="flex flex-col items-center justify-center w-full">
                           <div className="flex items-center gap-3">
                             <RefreshCw size={16} className="animate-spin" />
                             <span className="text-[10px] tracking-widest font-bold">{UI_TEXT.awaiting[lang]}</span>
                           </div>
                           {progressLog && (
                              <span className="absolute bottom-2 text-[8px] font-mono text-neutral-500 normal-case opacity-0 animate-slide-up">
                                {progressLog}
                              </span>
                           )}
                         </div>
                       ) : (
                         <div className="flex items-center justify-center gap-3">
                            <Zap size={16} className={processing ? '' : 'fill-current'} />
                            <span className="text-xs font-bold tracking-widest">Enviar Pedido</span>
                         </div>
                       )}
                     </Button>
                  </form>
                </>
              )}

            </div>
            
            {/* Background Grid Decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes slide-up {
           0% { transform: translateY(10px); opacity: 0; }
           100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
