import React, { useState, useEffect } from 'react';
import { PRODUCTS, UI_TEXT } from './constants';
import { Language, Product } from './types';
import { LanguageSwitch } from './components/LanguageSwitch';
import { ProductCard } from './components/ProductCard';
import { Button } from './components/Button';
import { PaymentModal } from './components/PaymentModal';
import { AboutModal } from './components/AboutModal';
import { DisclaimerModal } from './components/DisclaimerModal';
import { ShoppingBag, X, ArrowRight, CheckCircle, Info } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);
  const [scrolled, setScrolled] = useState(false);
  
  // Payment State
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // About State
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleCheckout = () => {
    setCartOpen(false);
    setShowDisclaimer(true);
  };

  const handleDisclaimerConfirm = () => {
    setShowDisclaimer(false);
    setShowPayment(true);
  };

  const handlePaymentConfirm = () => {
    setShowPayment(false);
    setCart([]);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black overflow-x-hidden flex flex-col">
      
      {/* Modals */}
      <DisclaimerModal 
        isOpen={showDisclaimer}
        onClose={() => setShowDisclaimer(false)}
        onConfirm={handleDisclaimerConfirm}
      />

      <PaymentModal 
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        onConfirm={handlePaymentConfirm}
        total={totalPrice}
        lang={lang}
      />

      <AboutModal 
        isOpen={showAbout}
        onClose={() => setShowAbout(false)}
      />

      {/* Success Notification */}
      <div className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-[70] transition-all duration-500 ${showSuccess ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'}`}>
        <div className="bg-white text-black px-6 py-4 flex items-center gap-4 shadow-2xl border border-neutral-200">
          <CheckCircle size={20} className="text-green-600" />
          <div className="flex flex-col">
             <span className="text-[10px] font-mono uppercase tracking-widest font-bold">SUCCESS</span>
             <span className="text-xs">Assets dispatched to encrypted queue.</span>
          </div>
        </div>
      </div>

      {/* Technical Header */}
      <nav className={`fixed top-0 left-0 right-0 z-40 px-6 py-4 md:px-8 md:py-6 flex justify-between items-start transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-neutral-900' : 'bg-transparent'}`}>
        <div className="flex flex-col">
          <div className="text-sm font-bold tracking-[0.25em] uppercase text-white mix-blend-difference cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            KĀMI.<span className="text-neutral-600">SYS</span>
          </div>
          <span className="text-[8px] font-mono text-neutral-500 mt-1 hidden md:block">
            V.2.0.4 // SECURE CONNECTION
          </span>
        </div>
        
        <div className="flex items-center gap-6 md:gap-8">
          {/* Language Switch Removed as per request */}
          <button 
            onClick={() => setCartOpen(true)}
            className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            [{UI_TEXT.cart[lang]}] <span className="text-white bg-neutral-800 px-1.5 py-0.5 ml-1">{cart.length}</span>
          </button>
        </div>
      </nav>

      <main className="flex-grow flex flex-col relative pt-32 pb-20">
        
        {/* Hero Section */}
        <div className="w-full px-6 md:px-12 mb-20 md:mb-32">
          <div className="max-w-7xl mx-auto border-l border-neutral-800 pl-6 md:pl-12 py-8">
            <h1 className="text-[14vw] md:text-[11vw] leading-[0.85] font-black tracking-tighter text-white uppercase opacity-90">
              Kāmi<span className="text-neutral-800">.</span>
            </h1>
            <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
               <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest max-w-xs leading-relaxed">
                 SISTEMA DE DISTRIBUIÇÃO DE ATIVOS DIGITAIS.
               </p>
               <div className="h-px w-12 bg-neutral-800 hidden md:block"></div>
               <div className="flex gap-4">
                 <span className="px-2 py-1 border border-neutral-800 text-[9px] font-mono text-neutral-400">AES-256</span>
                 <span className="px-2 py-1 border border-neutral-800 text-[9px] font-mono text-neutral-400">INSTANT_DELIVERY</span>
               </div>
            </div>
          </div>
        </div>

        {/* Inventory Grid */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between mb-6 border-b border-neutral-900 pb-4">
            <h2 className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
               /// AVAILABLE ASSETS
            </h2>
            <span className="animate-pulse w-1.5 h-1.5 bg-green-500 rounded-full"></span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
            {PRODUCTS.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                lang={lang} 
                index={index}
                onAdd={addToCart} 
              />
            ))}
          </div>
        </div>

        {/* Footer Info Link */}
        <div className="w-full flex justify-center py-12 mt-auto">
           <button 
             onClick={() => setShowAbout(true)}
             className="text-[10px] font-mono text-neutral-600 hover:text-white uppercase tracking-widest flex items-center gap-2 transition-colors"
           >
             <Info size={12} />
             <span>System Architects // About</span>
           </button>
        </div>

      </main>

      {/* Cart Drawer - Technical Style */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-500 ${cartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${cartOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setCartOpen(false)}
        />
        
        <div className={`absolute top-0 right-0 h-full w-full md:w-[500px] bg-[#0A0A0A] border-l border-neutral-800 transform transition-transform duration-500 cubic-bezier(0.2, 0, 0, 1) flex flex-col ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          <div className="px-8 py-6 border-b border-neutral-800 flex items-center justify-between bg-[#0A0A0A]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white"></div>
              <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-white">{UI_TEXT.cart[lang]}</h2>
            </div>
            <button onClick={() => setCartOpen(false)} className="text-neutral-500 hover:text-white transition-colors">
              <X strokeWidth={1.5} size={20} />
            </button>
          </div>

          <div className="flex-grow p-8 overflow-y-auto bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px]">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-neutral-700 space-y-4 border border-dashed border-neutral-800">
                <ShoppingBag size={32} strokeWidth={1} />
                <span className="font-mono text-[10px] tracking-widest uppercase">{UI_TEXT.emptyCart[lang]}</span>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item, idx) => (
                  <div key={`${item.id}-${idx}`} className="bg-[#050505] border border-neutral-800 p-5 flex justify-between items-start group hover:border-neutral-600 transition-colors">
                    <div>
                      <span className="block font-mono text-[9px] text-neutral-500 mb-1">ID: {item.id.toUpperCase()}</span>
                      <p className="text-lg font-light text-white tracking-tight">{item.name[lang]}</p>
                      <p className="text-[10px] text-neutral-400 mt-1 uppercase">Spotify Protocol</p>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                      <p className="text-lg font-mono text-neutral-300">{formatPrice(item.price)}</p>
                      <button 
                        onClick={() => removeFromCart(idx)}
                        className="text-[9px] font-mono text-neutral-600 hover:text-red-500 uppercase tracking-widest transition-colors"
                      >
                        [{UI_TEXT.remove[lang]}]
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-8 border-t border-neutral-800 bg-[#0A0A0A]">
            <div className="flex justify-between items-end mb-8 font-mono">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest">{UI_TEXT.total[lang]}</span>
              <div className="text-right">
                <span className="text-[10px] text-neutral-600 mr-2">BRL</span>
                <span className="text-3xl text-white">{formatPrice(totalPrice)}</span>
              </div>
            </div>
            <Button 
              fullWidth 
              variant="primary"
              disabled={cart.length === 0}
              className={cart.length === 0 ? 'opacity-20 cursor-not-allowed' : ''}
              onClick={handleCheckout}
            >
              <span className="flex items-center justify-between w-full">
                <span>{UI_TEXT.checkout[lang]}</span>
                <ArrowRight size={16} strokeWidth={1.5} />
              </span>
            </Button>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
};

export default App;