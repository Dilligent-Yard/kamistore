import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { UI_TEXT, PIX_KEY } from '../constants';
import { Button } from './Button';
import { Copy, Check, X, Lock, Zap, Building2, FileText, AlertTriangle, ShieldCheck, Clock, RefreshCw, ScanLine } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  total: number;
  lang: Language;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, onConfirm, total, lang }) => {
  const [copied, setCopied] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [transactionId, setTransactionId] = useState('');
  const [progressLog, setProgressLog] = useState<string>('');

  // Generated QR Code URL based on the PIX_KEY
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${PIX_KEY}&bgcolor=ffffff&color=000000&margin=0`;

  useEffect(() => {
    if (isOpen) {
      // Generate random transaction ID
      const randomId = Math.random().toString(36).substring(2, 10).toUpperCase();
      const date = new Date();
      const timeStr = `${date.getHours()}${date.getMinutes()}`;
      setTransactionId(`TX-${timeStr}-${randomId}`);
      setTimeLeft(600);
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

  const handleCopy = () => {
    navigator.clipboard.writeText(PIX_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePayment = () => {
    setProcessing(true);
    
    // Simulate connection logs
    const logs = [
      "Establishing secure handshake...",
      "Verifying merchant signature...",
      "Scanning ledger for description...",
      "Email pattern match found.",
      "Payment authorized."
    ];

    let step = 0;
    const logInterval = setInterval(() => {
        if (step < logs.length) {
            setProgressLog(logs[step]);
            step++;
        }
    }, 800);

    setTimeout(() => {
      clearInterval(logInterval);
      setProcessing(false);
      onConfirm();
    }, 4500);
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
              
              {/* Instructions Header */}
              <div className="flex items-center gap-2 mb-3">
                 <ScanLine size={14} className="text-emerald-500" />
                 <span className="text-[10px] font-mono font-bold text-emerald-500 tracking-[0.2em] uppercase">
                    {UI_TEXT.pixInstructions[lang]}
                 </span>
              </div>

              {/* QR Code Container */}
              <div className="relative group mb-6">
                 {/* Tech Frame Markers */}
                 <div className="absolute -inset-6 border border-neutral-800/30"></div>
                 <div className="absolute -top-1 -left-1 w-6 h-6 border-t border-l border-emerald-500/50 group-hover:border-emerald-400 transition-colors duration-500"></div>
                 <div className="absolute -top-1 -right-1 w-6 h-6 border-t border-r border-emerald-500/50 group-hover:border-emerald-400 transition-colors duration-500"></div>
                 <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b border-l border-emerald-500/50 group-hover:border-emerald-400 transition-colors duration-500"></div>
                 <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b border-r border-emerald-500/50 group-hover:border-emerald-400 transition-colors duration-500"></div>

                 {/* The Code */}
                 <div className="bg-white p-3 relative overflow-hidden shadow-[0_0_50px_-10px_rgba(16,185,129,0.1)]">
                    <img 
                      src={qrCodeUrl} 
                      alt="Payment QR Code" 
                      className="w-40 h-40 md:w-52 md:h-52 object-contain rendering-pixelated mix-blend-multiply"
                    />
                    
                    {/* Laser Scan Animation - GREEN Theme */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-[scanLine_3s_ease-in-out_infinite] opacity-80 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent animate-[scanGradient_3s_ease-in-out_infinite] pointer-events-none"></div>
                 </div>
              </div>

              {/* Email Instruction Warning */}
              <div className="w-full mb-6 relative overflow-hidden group">
                 <div className="bg-amber-950/20 border-l-2 border-amber-600 p-4 relative">
                    <div className="flex gap-3">
                       <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                       <div className="flex flex-col gap-1">
                          <span className="text-[9px] font-mono text-amber-500 font-bold tracking-widest uppercase">
                             {UI_TEXT.requiredAction[lang]}
                          </span>
                          <p className="text-[10px] md:text-[11px] text-amber-500 font-semibold leading-relaxed tracking-wide">
                             {UI_TEXT.emailInstruction[lang]}
                          </p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Pix Key Actions */}
              <div className="w-full space-y-5">
                <div className="space-y-2">
                   <div className="flex justify-between items-end px-1">
                      <label className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                         Pix Key (Copy Paste)
                      </label>
                   </div>
                   <div className="relative group">
                      <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      <div className="flex items-stretch h-12 border border-neutral-800 group-hover:border-neutral-700 transition-colors bg-[#080808]">
                          <div className="flex-grow flex items-center px-4 font-mono text-[11px] text-neutral-300 truncate select-all">
                             {PIX_KEY}
                          </div>
                          <button 
                             onClick={handleCopy}
                             className={`px-4 md:px-6 flex items-center gap-2 transition-all duration-300 border-l border-neutral-800 shrink-0 ${copied ? 'bg-emerald-900/20 text-emerald-400 hover:bg-emerald-900/30' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}
                             type="button"
                          >
                             {copied ? <Check size={16} /> : <Copy size={16} />}
                             <span className="text-[10px] font-mono uppercase tracking-wide inline">
                               {copied ? 'COPIED' : 'COPY'}
                             </span>
                          </button>
                      </div>
                   </div>
                </div>

                {/* Confirm Button */}
                <Button 
                    fullWidth 
                    variant="primary" 
                    onClick={handlePayment}
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
                        <span className="text-xs font-bold tracking-widest">{UI_TEXT.confirmPayment[lang]}</span>
                     </div>
                   )}
                 </Button>
              </div>

            </div>
            
            {/* Background Grid Decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scanLine {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes scanGradient {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes slide-up {
           0% { transform: translateY(10px); opacity: 0; }
           100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};